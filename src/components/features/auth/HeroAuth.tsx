import { Shield } from 'lucide-react';
import React from 'react'

const HeroAuth = () => {
  return (
    <div className="flex flex-col justify-between h-screen py-6">
      <div className="flex items-center gap-2">
        <div className="bg-primary rounded-2xl p-3">
          <Shield className="text-white size-5" />
        </div>
        <div>
          <h1 className="font-bold text-2xl">RiskScore</h1>
          <p className="text-sm text-muted-foreground ">UMKM Analytics</p>
        </div>
      </div>
      <div className="space-y-6">
        <div className="font-bold text-5xl">
          <h3>Understand Your</h3>
          <h3 className="text-accent-foreground">Financial Risk</h3>
        </div>
        <div className="text-muted-foreground text-md font-semibold">
          <p>Make data-driven decisions with AI-powered risk</p>
          <p>assessment designed for Indonesian SMEs.</p>
        </div>
        <div className="flex items-center gap-8">
          <div>
            <h3 className="text-3xl font-bold">2,500+</h3>
            <h3 className="text-md text-muted-foreground">Active Business</h3>
          </div>
          <div>
            <h3 className="text-3xl font-bold">98%</h3>
            <h3 className="text-md text-muted-foreground">Accuracy Rate</h3>
          </div>
          <div>
            <h3 className="text-3xl font-bold">24/7</h3>
            <h3 className="text-md text-muted-foreground">
              Real-time Analysis
            </h3>
          </div>
        </div>
      </div>
      <div>
        <p className="text-muted-foreground text-sm font-semibold">
          Trusted by thousands of Indonesian SMEs
        </p>
      </div>
    </div>
  );
}

export default HeroAuth