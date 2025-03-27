"use client"

import type React from "react"

import { useState, useRef } from "react"
import { Upload, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface ImageUploadProps {
  onUpload: (imageData: string) => void
}

export default function ImageUpload({ onUpload }: ImageUploadProps) {
  const [dragActive, setDragActive] = useState(false)
  const [previewImage, setPreviewImage] = useState<string | null>(null)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()

    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = (file: File) => {
    // Check if file is an image
    if (!file.type.match("image.*")) {
      alert("Please upload an image file")
      return
    }

    const reader = new FileReader()
    reader.onload = (e) => {
      const result = e.target?.result as string
      setPreviewImage(result)
    }
    reader.readAsDataURL(file)
  }

  const handleButtonClick = () => {
    fileInputRef.current?.click()
  }

  const handleConfirm = () => {
    if (previewImage) {
      onUpload(previewImage)
    }
  }

  return (
    <div className="flex flex-col items-center">
      {!previewImage ? (
        <Card
          className={`border-2 border-dashed p-8 w-full flex flex-col items-center justify-center cursor-pointer ${
            dragActive ? "border-primary bg-primary/5" : "border-muted-foreground/20"
          }`}
          onDragEnter={handleDrag}
          onDragOver={handleDrag}
          onDragLeave={handleDrag}
          onDrop={handleDrop}
          onClick={handleButtonClick}
        >
          <input ref={fileInputRef} type="file" className="hidden" accept="image/*" onChange={handleChange} />

          <div className="flex flex-col items-center gap-4">
            <div className="p-4 rounded-full bg-primary/10">
              <Upload className="h-8 w-8 text-primary" />
            </div>
            <div className="text-center">
              <p className="font-medium">Drag and drop an image or click to browse</p>
              <p className="text-sm text-muted-foreground mt-1">Supported formats: JPG, PNG, JPEG</p>
            </div>
          </div>
        </Card>
      ) : (
        <div className="w-full">
          <Card className="p-4 mb-4">
            <div className="aspect-video relative overflow-hidden rounded-md">
              <img src={previewImage || "/placeholder.svg"} alt="Preview" className="w-full h-full object-contain" />
            </div>
          </Card>

          <div className="flex justify-between">
            <Button variant="outline" onClick={() => setPreviewImage(null)}>
              Choose Another
            </Button>
            <Button onClick={handleConfirm}>
              <ImageIcon className="mr-2 h-4 w-4" />
              Use This Image
            </Button>
          </div>
        </div>
      )}
    </div>
  )
}

