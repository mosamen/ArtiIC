"use client"

import { useState } from "react"
import Link from "next/link"
import { BookOpen, Check, Copy, ExternalLink } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"

export default function N8nIntegration() {
  const [copied, setCopied] = useState(false)
  const [webhookUrl, setWebhookUrl] = useState("https://n8n.example.com/webhook/course-enrollment")

  const handleCopy = () => {
    navigator.clipboard.writeText(webhookUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex min-h-screen flex-col">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center">
          <Link href="/" className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            <span className="text-xl font-bold">EduPlatform</span>
          </Link>
        </div>
      </header>
      <main className="flex-1 container py-6">
        <div className="mb-6">
          <h1 className="text-3xl font-bold">n8n Integration</h1>
          <p className="text-muted-foreground mt-2">
            Configure and manage your n8n workflows for automating educational processes.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Webhook Configuration</CardTitle>
              <CardDescription>
                Set up webhooks to trigger n8n workflows from your educational platform.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="webhook-url">Webhook URL</Label>
                <div className="flex">
                  <Input
                    id="webhook-url"
                    value={webhookUrl}
                    onChange={(e) => setWebhookUrl(e.target.value)}
                    className="rounded-r-none"
                  />
                  <Button variant="outline" size="icon" className="rounded-l-none border-l-0" onClick={handleCopy}>
                    {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    <span className="sr-only">Copy</span>
                  </Button>
                </div>
                <p className="text-sm text-muted-foreground">
                  Use this URL in your n8n workflow to receive data from the platform.
                </p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="event-type">Event Type</Label>
                <select
                  id="event-type"
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                >
                  <option value="course.enrollment">Course Enrollment</option>
                  <option value="course.completion">Course Completion</option>
                  <option value="user.registration">User Registration</option>
                  <option value="certificate.issued">Certificate Issued</option>
                </select>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">Save Webhook Configuration</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>n8n Workflow Templates</CardTitle>
              <CardDescription>
                Pre-built workflow templates for common educational automation scenarios.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Tabs defaultValue="enrollment">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="enrollment">Enrollment</TabsTrigger>
                  <TabsTrigger value="notifications">Notifications</TabsTrigger>
                  <TabsTrigger value="certificates">Certificates</TabsTrigger>
                </TabsList>
                <TabsContent value="enrollment" className="space-y-4 pt-4">
                  <div className="rounded-md border p-4">
                    <h3 className="font-medium">Course Enrollment Workflow</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Automates the enrollment process, sends welcome emails, and updates student records.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Import to n8n
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-md border p-4">
                    <h3 className="font-medium">Payment Processing</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Handles payment confirmations, issues receipts, and grants course access.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Import to n8n
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="notifications" className="space-y-4 pt-4">
                  <div className="rounded-md border p-4">
                    <h3 className="font-medium">Course Reminder Notifications</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Sends automated reminders for upcoming deadlines and live sessions.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Import to n8n
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-md border p-4">
                    <h3 className="font-medium">Progress Updates</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Sends weekly progress reports to students and instructors.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Import to n8n
                      </Button>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="certificates" className="space-y-4 pt-4">
                  <div className="rounded-md border p-4">
                    <h3 className="font-medium">Certificate Generation</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Automatically generates and emails certificates upon course completion.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Import to n8n
                      </Button>
                    </div>
                  </div>
                  <div className="rounded-md border p-4">
                    <h3 className="font-medium">Certificate Verification</h3>
                    <p className="text-sm text-muted-foreground mt-1">
                      Creates verification links and QR codes for certificates.
                    </p>
                    <div className="mt-4 flex justify-end">
                      <Button variant="outline" size="sm" className="gap-1">
                        <ExternalLink className="h-4 w-4" />
                        Import to n8n
                      </Button>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
          </Card>
        </div>

        <div className="mt-6">
          <Card>
            <CardHeader>
              <CardTitle>Custom Workflow Configuration</CardTitle>
              <CardDescription>Configure custom n8n workflows for specific educational processes.</CardDescription>
            </CardHeader>
            <CardContent>
              <Tabs defaultValue="json">
                <TabsList>
                  <TabsTrigger value="json">JSON Configuration</TabsTrigger>
                  <TabsTrigger value="visual">Visual Editor</TabsTrigger>
                </TabsList>
                <TabsContent value="json" className="space-y-4 pt-4">
                  <div className="space-y-2">
                    <Label htmlFor="workflow-json">Workflow JSON</Label>
                    <Textarea
                      id="workflow-json"
                      className="font-mono h-[300px]"
                      placeholder={`{
  "nodes": [
    {
      "parameters": {
        "httpMethod": "POST",
        "path": "course-enrollment",
        "options": {}
      },
      "name": "Webhook",
      "type": "n8n-nodes-base.webhook",
      "typeVersion": 1,
      "position": [
        250,
        300
      ]
    }
    // Add more nodes here
  ],
  "connections": {}
}`}
                    />
                  </div>
                </TabsContent>
                <TabsContent value="visual" className="pt-4">
                  <div className="flex items-center justify-center h-[300px] border rounded-md bg-muted/40">
                    <div className="text-center">
                      <p className="text-muted-foreground">Visual editor coming soon</p>
                      <p className="text-sm text-muted-foreground mt-2">
                        For now, please use the JSON configuration or the n8n interface directly.
                      </p>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button variant="outline">Test Workflow</Button>
              <Button>Save & Deploy</Button>
            </CardFooter>
          </Card>
        </div>
      </main>
    </div>
  )
}
