"use client"

import { useState, useRef, useEffect } from "react"
import { Camera, FlipVerticalIcon as FlipCameraIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useMobile } from "@/hooks/use-mobile"

interface ImageCaptureProps {
  onCapture: (imageData: string) => void
}

export default function ImageCapture({ onCapture }: ImageCaptureProps) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [stream, setStream] = useState<MediaStream | null>(null)
  const [facingMode, setFacingMode] = useState<"user" | "environment">("environment")
  const isMobile = useMobile()

  useEffect(() => {
    const startCamera = async () => {
      try {
        const constraints = {
          video: {
            facingMode,
            width: { ideal: 1280 },
            height: { ideal: 720 },
          },
        }

        if (stream) {
          stream.getTracks().forEach((track) => track.stop())
        }

        const newStream = await navigator.mediaDevices.getUserMedia(constraints)
        setStream(newStream)

        if (videoRef.current) {
          videoRef.current.srcObject = newStream
        }
      } catch (err) {
        console.error("Error accessing camera:", err)
      }
    }

    startCamera()

    return () => {
      if (stream) {
        stream.getTracks().forEach((track) => track.stop())
      }
    }
  }, [facingMode])

  const captureImage = () => {
    if (videoRef.current && canvasRef.current) {
      const video = videoRef.current
      const canvas = canvasRef.current
      const context = canvas.getContext("2d")

      if (context) {
        canvas.width = video.videoWidth
        canvas.height = video.videoHeight
        context.drawImage(video, 0, 0, canvas.width, canvas.height)

        const imageData = canvas.toDataURL("image/jpeg")
        onCapture(imageData)
      }
    }
  }

  const toggleCamera = () => {
    setFacingMode((prev) => (prev === "user" ? "environment" : "user"))
  }

  return (
    <div className="flex flex-col items-center">
      <Card className="relative overflow-hidden mb-4 w-full">
        <div className="aspect-video relative">
          <video ref={videoRef} autoPlay playsInline className="w-full h-full object-cover" />
          <canvas ref={canvasRef} className="hidden" />
        </div>
      </Card>

      <div className="flex gap-4">
        {isMobile && (
          <Button variant="outline" onClick={toggleCamera} type="button">
            <FlipCameraIcon className="mr-2 h-4 w-4" />
            Flip Camera
          </Button>
        )}

        <Button onClick={captureImage} type="button">
          <Camera className="mr-2 h-4 w-4" />
          Capture Table
        </Button>
      </div>

      <p className="text-sm text-muted-foreground mt-4 text-center">
        Position the handwritten table within the frame and ensure good lighting for best results.
      </p>
    </div>
  )
}

