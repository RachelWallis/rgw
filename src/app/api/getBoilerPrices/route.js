import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
    const filePath = path.join(process.cwd(), "src/app/api/getBoilerPrices/boilers.json");

    try {
        const fileContents = fs.readFileSync(filePath, "utf-8");
        const data = JSON.parse(fileContents);

        return NextResponse.json(data, { status: 200 });
    } catch (error) {
        console.error("Error fetching boiler prices from JSON:", error);
        return NextResponse.json({ error: "Failed to load boiler prices" }, { status: 500 });
    }
}

