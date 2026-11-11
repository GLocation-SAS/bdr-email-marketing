import { NextRequest, NextResponse } from "next/server";
import fs from "fs/promises";
import path from "path";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { slices, suffix = "claro" } = body;

    if (!Array.isArray(slices) || slices.length === 0) {
      return NextResponse.json(
        { success: false, error: "No slices provided" },
        { status: 400 }
      );
    }

    const blocksDir = path.join(process.cwd(), "public", "email-blocks");
    await fs.mkdir(blocksDir, { recursive: true });

    const savedFiles: string[] = [];

    for (const slice of slices) {
      if (!slice.dataUrl || !slice.id) continue;
      const base64Data = slice.dataUrl.replace(/^data:image\/\w+;base64,/, "");
      const buffer = Buffer.from(base64Data, "base64");
      const filename = `saasw-${slice.id}-${suffix}.png`;
      const filePath = path.join(blocksDir, filename);
      await fs.writeFile(filePath, buffer);
      savedFiles.push(filename);
    }

    return NextResponse.json({
      success: true,
      savedCount: savedFiles.length,
      files: savedFiles,
    });
  } catch (error: any) {
    console.error("Error saving email blocks:", error);
    return NextResponse.json(
      { success: false, error: error.message || "Failed to save blocks" },
      { status: 500 }
    );
  }
}

