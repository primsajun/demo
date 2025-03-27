"use client"

import { useState } from "react"
import { Download, Table, Code, LayoutList } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ColumnView from "./column-view"

interface ResultsDisplayProps {
  results: {
    headers: string[]
    rows: Record<string, string>[]
  }
}

export default function ResultsDisplay({ results }: ResultsDisplayProps) {
  const [activeTab, setActiveTab] = useState("table")

  const downloadCSV = () => {
    const { headers, rows } = results
    const csvContent = [
      headers.join(","),
      ...rows.map((row) => headers.map((header) => row[header] || "").join(",")),
    ].join("\n")

    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", "table_data.csv")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const downloadJSON = () => {
    const jsonString = JSON.stringify(results, null, 2)
    const blob = new Blob([jsonString], { type: "application/json" })
    const url = URL.createObjectURL(blob)
    const link = document.createElement("a")
    link.setAttribute("href", url)
    link.setAttribute("download", "table_data.json")
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <Card className="p-6">
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <div className="flex justify-between items-center mb-4">
          <TabsList>
            <TabsTrigger value="table">
              <Table className="mr-2 h-4 w-4" />
              Table View
            </TabsTrigger>
            <TabsTrigger value="columns">
              <LayoutList className="mr-2 h-4 w-4" />
              Column View
            </TabsTrigger>
            <TabsTrigger value="json">
              <Code className="mr-2 h-4 w-4" />
              JSON Data
            </TabsTrigger>
          </TabsList>

          <div className="flex gap-2">
            <Button variant="outline" size="sm" onClick={downloadCSV}>
              <Download className="mr-2 h-4 w-4" />
              Export CSV
            </Button>
            <Button variant="outline" size="sm" onClick={downloadJSON}>
              <Download className="mr-2 h-4 w-4" />
              Export JSON
            </Button>
          </div>
        </div>

        <TabsContent value="table" className="mt-0">
          <div className="rounded-md border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-muted">
                    {results.headers.map((header, index) => (
                      <th key={index} className="px-4 py-3 text-left font-medium">
                        {header}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {results.rows.map((row, rowIndex) => (
                    <tr key={rowIndex} className="border-t">
                      {results.headers.map((header, colIndex) => (
                        <td key={colIndex} className="px-4 py-3">
                          {row[header] || ""}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="columns" className="mt-0">
          <ColumnView results={results} />
        </TabsContent>

        <TabsContent value="json" className="mt-0">
          <div className="bg-muted rounded-md p-4 overflow-x-auto">
            <pre className="text-sm">{JSON.stringify(results, null, 2)}</pre>
          </div>
        </TabsContent>
      </Tabs>
    </Card>
  )
}

