"use client";
// IN next js dynamic component should be a client component
import { Input } from "@/components/ui/input.jsx";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

const AddProductForm = ({ user }) => {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const handleSubmit = async (e) => {};

  return (
    <>
      <form onSubmit={handleSubmit} className="w-full max-w-2xl mx-auto">
        <div className="flex flex-col sm:flex-row gap-2">
          <Input
            type="url"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Paste product URL (Amazon,Ikea, etc.)"
            className="h-12 text-base"
            required
            disabled={loading}
          />
          <Button
            className="bg-orange-500 hover:bg-olive-500 h-10 sm:h-12 px-8"
            type="submit"
            disabled={loading}
            size={"lg"}
          >
            {loading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              </>
            ) : (
              "Track Price"
            )}
          </Button>
        </div>
      </form>
      {/* Authentication Modal */}
    </>
  );
};

export default AddProductForm;
