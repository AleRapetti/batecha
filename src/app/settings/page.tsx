"use client";

import { FormEvent, useEffect, useState } from "react";
import { Button, Column, Heading, Input, Spinner, Text } from "@once-ui-system/core";

type Settings = {
  firstName: string;
  lastName: string;
  name: string;
  role: string;
  email: string;
  location: string;
  avatar: string;
  languages: string[];
  locale: string;
};

export default function SettingsPage() {
  const [settings, setSettings] = useState<Settings | null>(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch("/api/settings").then(async (response) => {
      if (response.ok) setSettings(await response.json());
    });
  }, []);

  const update = (field: keyof Settings, value: string) => {
    setSettings((current) => current && { ...current, [field]: value });
  };

  const save = async (event: FormEvent) => {
    event.preventDefault();
    if (!settings) return;

    const response = await fetch("/api/settings", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(settings),
    });
    setMessage(response.ok ? "Settings saved" : "Unable to save settings");
  };

  if (!settings) return <Spinner />;

  return (
    <Column as="main" maxWidth="m" fillWidth gap="32" paddingY="64">
      <Column gap="8">
        <Heading>Site settings</Heading>
        <Text onBackground="neutral-weak">Manage the main personal details from one place.</Text>
      </Column>
      <Column as="form" onSubmit={save} gap="20" fillWidth>
        <Input id="first-name" label="First name" value={settings.firstName} onChange={(event) => update("firstName", event.target.value)} />
        <Input id="last-name" label="Last name" value={settings.lastName} onChange={(event) => update("lastName", event.target.value)} />
        <Input id="full-name" label="Full name" value={settings.name} onChange={(event) => update("name", event.target.value)} />
        <Input id="role" label="Role" value={settings.role} onChange={(event) => update("role", event.target.value)} />
        <Input id="email" label="Email" type="email" value={settings.email} onChange={(event) => update("email", event.target.value)} />
        <Input id="location" label="Location" value={settings.location} onChange={(event) => update("location", event.target.value)} />
        <Button type="submit">Save settings</Button>
        {message && <Text onBackground="neutral-weak">{message}</Text>}
      </Column>
    </Column>
  );
}