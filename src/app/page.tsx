'use client'
import { AddFile } from "@/Components/AddFile";
import { Tasks } from "@/Components/Tasks";

export default function Home() {
  return (
    <div className="flex items-center justify-center">
      <div className="BackgroundTrasnparent">
        <Tasks />
      </div>
      <div className="absolute z-10">
        <AddFile />
      </div>
    </div>
  );
}
