import { Card } from "@/components/ui/card"

interface ColumnViewProps {
  results: {
    headers: string[]
    rows: Record<string, string>[]
  }
}

export default function ColumnView({ results }: ColumnViewProps) {
  const { headers, rows } = results

  // Organize data by columns
  const columnData: Record<string, string[]> = {}

  headers.forEach((header) => {
    columnData[header] = rows.map((row) => row[header] || "")
  })

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      {headers.map((header, index) => (
        <Card key={index} className="p-4">
          <h3 className="text-lg font-semibold mb-3 pb-2 border-b">{header}</h3>
          <ul className="space-y-2">
            {columnData[header].map((value, rowIndex) => (
              <li key={rowIndex} className="py-1 px-2 rounded hover:bg-muted">
                {value || <span className="text-muted-foreground italic">Empty</span>}
              </li>
            ))}
          </ul>
        </Card>
      ))}
    </div>
  )
}

