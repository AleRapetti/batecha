import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";
import * as cookie from "cookie";
import { updatePersonSettings } from "@/resources/content";
import defaultSettings from "@/resources/site-settings.json";

const settingsPath = path.join(process.cwd(), "src", "resources", "site-settings.json");

function isAuthenticated(request: NextRequest) {
  const cookies = cookie.parse(request.headers.get("cookie") || "");
  return cookies.authToken === "authenticated";
}

async function readSettings() {
  try {
    return JSON.parse(await fs.readFile(settingsPath, "utf8"));
  } catch {
    return defaultSettings;
  }
}

export async function GET(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  return NextResponse.json(await readSettings());
}

export async function PUT(request: NextRequest) {
  if (!isAuthenticated(request)) {
    return NextResponse.json({ message: "Unauthorized" }, { status: 401 });
  }

  const nextSettings = await request.json();
  const settings = await readSettings();
  const requiredFields = ["firstName", "lastName", "name", "role", "email", "location"];

  if (requiredFields.some((field) => typeof nextSettings[field] !== "string" || !nextSettings[field].trim())) {
    return NextResponse.json({ message: "All required fields must be filled" }, { status: 400 });
  }

  const updatedSettings = {
    ...settings,
    ...nextSettings,
    languages: Array.isArray(nextSettings.languages) ? nextSettings.languages : settings.languages,
  };

  await fs.writeFile(settingsPath, `${JSON.stringify(updatedSettings, null, 2)}\n`, "utf8");
  updatePersonSettings(updatedSettings);

  return NextResponse.json(updatedSettings);
}