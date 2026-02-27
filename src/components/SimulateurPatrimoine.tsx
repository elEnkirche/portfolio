"use client";

import { useState, useMemo, useEffect } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// ─── Types ────────────────────────────────────────────────────────────────────

interface FormState {
  compteCourant: number;
  livretA: number;
  pea: number;
  peaGrowth: number;
  years: number;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

const formatCurrency = (value: number): string => {
  if (value >= 1_000_000) return `${(value / 1_000_000).toFixed(1)}M€`;
  if (value >= 10_000) return `${(value / 1_000).toFixed(0)}k€`;
  return `${Math.round(value)}€`;
};

// ─── useWindowWidth hook ──────────────────────────────────────────────────────

function useWindowWidth(): number {
  const [width, setWidth] = useState<number>(
    typeof window !== "undefined" ? window.innerWidth : 1024
  );
  useEffect(() => {
    const handler = () => setWidth(window.innerWidth);
    window.addEventListener("resize", handler);
    return () => window.removeEventListener("resize", handler);
  }, []);
  return width;
}

// ─── Sub-components ───────────────────────────────────────────────────────────

const CustomTooltip = ({ active, payload, label }: any) => {
  if (!active || !payload?.length) return null;
  const total = payload.reduce((sum: number, p: any) => sum + (p.value || 0), 0);
  return (
    <div
      style={{
        background: "#0f1923",
        border: "1px solid #1e3a4a",
        borderRadius: "12px",
        padding: "14px 18px",
        fontFamily: "'DM Mono', monospace",
        fontSize: "12px",
        color: "#94a3b8",
        boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
      }}
    >
      <div style={{ color: "#e2e8f0", fontWeight: 700, marginBottom: 8, fontSize: 13 }}>
        Année {label}
      </div>
      {payload.map((p: any) => (
        <div
          key={p.dataKey}
          style={{ display: "flex", justifyContent: "space-between", gap: 24, marginBottom: 4 }}
        >
          <span style={{ color: p.color }}>{p.name}</span>
          <span style={{ color: "#e2e8f0", fontWeight: 600 }}>{formatCurrency(p.value)}</span>
        </div>
      ))}
      <div
        style={{
          borderTop: "1px solid #1e3a4a",
          marginTop: 8,
          paddingTop: 8,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <span style={{ color: "#64748b" }}>Total</span>
        <span style={{ color: "#38bdf8", fontWeight: 700 }}>{formatCurrency(total)}</span>
      </div>
    </div>
  );
};

interface InputFieldProps {
  label: string;
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
  step?: number;
  min?: number;
}

const InputField = ({
  label,
  value,
  onChange,
  suffix = "€",
  step = 1000,
  min = 0,
}: InputFieldProps) => (
  <div style={{ marginBottom: "18px" }}>
    <label
      style={{
        display: "block",
        fontSize: "11px",
        fontFamily: "'DM Mono', monospace",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: "#64748b",
        marginBottom: "7px",
      }}
    >
      {label}
    </label>
    <div style={{ position: "relative" }}>
      <input
        type="number"
        value={value}
        min={min}
        step={step}
        onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
        style={{
          width: "100%",
          background: "#060d14",
          border: "1px solid #1e3a4a",
          borderRadius: "8px",
          padding: "10px 40px 10px 14px",
          color: "#e2e8f0",
          fontSize: "15px",
          fontFamily: "'DM Mono', monospace",
          fontWeight: 600,
          outline: "none",
          boxSizing: "border-box",
          transition: "border-color 0.2s",
        }}
        onFocus={(e) => (e.target.style.borderColor = "#38bdf8")}
        onBlur={(e) => (e.target.style.borderColor = "#1e3a4a")}
      />
      <span
        style={{
          position: "absolute",
          right: "12px",
          top: "50%",
          transform: "translateY(-50%)",
          color: "#475569",
          fontFamily: "'DM Mono', monospace",
          fontSize: "13px",
          pointerEvents: "none",
        }}
      >
        {suffix}
      </span>
    </div>
  </div>
);

const SectionTitle = ({ children }: { children: string }) => (
  <div
    style={{
      fontSize: "11px",
      fontFamily: "'DM Mono', monospace",
      textTransform: "uppercase",
      letterSpacing: "0.12em",
      color: "#38bdf8",
      marginBottom: "16px",
    }}
  >
    — {children}
  </div>
);

const LegendItem = ({ color, label, value }: { color: string; label: string; value: number }) => (
  <div
    style={{
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      marginBottom: "10px",
    }}
  >
    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div
        style={{
          width: 10,
          height: 10,
          borderRadius: 2,
          background: color,
          boxShadow: `0 0 6px ${color}80`,
          flexShrink: 0,
        }}
      />
      <span style={{ fontSize: "12px", color: "#64748b", fontFamily: "'DM Mono', monospace" }}>
        {label}
      </span>
    </div>
    <span
      style={{
        fontSize: "12px",
        color: "#e2e8f0",
        fontFamily: "'DM Mono', monospace",
        fontWeight: 600,
      }}
    >
      {formatCurrency(value)}
    </span>
  </div>
);

const YearsSlider = ({ value, onChange }: { value: number; onChange: (v: number) => void }) => (
  <div style={{ marginBottom: "8px" }}>
    <label
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        fontSize: "11px",
        fontFamily: "'DM Mono', monospace",
        textTransform: "uppercase",
        letterSpacing: "0.12em",
        color: "#64748b",
        marginBottom: "12px",
      }}
    >
      <span>Durée</span>
      <span style={{ color: "#e2e8f0", fontSize: "15px", fontWeight: 700 }}>{value} ans</span>
    </label>
    <input
      type="range"
      min={1}
      max={40}
      value={value}
      style={{ "--val": `${((value - 1) / 39) * 100}%` } as any}
      onChange={(e) => onChange(parseInt(e.target.value))}
    />
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "6px",
        fontSize: "10px",
        fontFamily: "'DM Mono', monospace",
        color: "#334155",
      }}
    >
      {["1", "10", "20", "30", "40"].map((v) => (
        <span key={v}>{v}</span>
      ))}
    </div>
  </div>
);

// ─── FormPanel ────────────────────────────────────────────────────────────────

interface FormPanelProps {
  form: FormState;
  set: (key: keyof FormState) => (v: number) => void;
  lastPoint: Record<string, number>;
  isMobile: boolean;
}

const FormPanel = ({ form, set, lastPoint, isMobile }: FormPanelProps) => (
  <div
    style={{
      width: isMobile ? "100%" : "30%",
      minWidth: isMobile ? undefined : "240px",
      background: "#0a1520",
      borderRadius: "16px",
      border: "1px solid #1e3a4a",
      padding: "24px 20px",
    }}
  >
    <div style={{ marginBottom: "20px" }}>
      <SectionTitle>Comptes</SectionTitle>
      <InputField label="Compte courant" value={form.compteCourant} onChange={set("compteCourant")} />
      <InputField label="Livret A (1,5%/an fixe)" value={form.livretA} onChange={set("livretA")} />
      <InputField label="PEA" value={form.pea} onChange={set("pea")} />
    </div>

    <div style={{ borderTop: "1px solid #1e3a4a", paddingTop: "20px", marginBottom: "20px" }}>
      <SectionTitle>Paramètres</SectionTitle>
      <InputField
        label="Croissance annuelle PEA"
        value={form.peaGrowth}
        onChange={set("peaGrowth")}
        suffix="%"
        step={0.5}
      />
      <YearsSlider value={form.years} onChange={set("years")} />
    </div>
  </div>
);

// ─── ChartPanel ───────────────────────────────────────────────────────────────

interface ChartPanelProps {
  data: Record<string, number>[];
  chartHeight: number;
}

const ChartPanel = ({ data, chartHeight }: ChartPanelProps) => (
  <div
    style={{
      flex: 1,
      width: "100%",
      background: "#0a1520",
      borderRadius: "16px",
      border: "1px solid #1e3a4a",
      padding: "24px 16px 16px",
    }}
  >
    <ResponsiveContainer width="100%" height={chartHeight}>
      <AreaChart data={data} margin={{ top: 10, right: 10, left: 10, bottom: 0 }}>
        <defs>
          <linearGradient id="gradCC" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#94a3b8" stopOpacity={0.4} />
            <stop offset="95%" stopColor="#94a3b8" stopOpacity={0.04} />
          </linearGradient>
          <linearGradient id="gradLA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.04} />
          </linearGradient>
          <linearGradient id="gradPEA" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#4ade80" stopOpacity={0.5} />
            <stop offset="95%" stopColor="#4ade80" stopOpacity={0.04} />
          </linearGradient>
        </defs>

        <CartesianGrid strokeDasharray="3 6" stroke="#1e3a4a" vertical={false} />

        <XAxis
          dataKey="year"
          tick={{ fill: "#475569", fontSize: 10, fontFamily: "'DM Mono', monospace" }}
          tickLine={false}
          axisLine={{ stroke: "#1e3a4a" }}
        />

        <YAxis
          tickFormatter={formatCurrency}
          tick={{ fill: "#475569", fontSize: 10, fontFamily: "'DM Mono', monospace" }}
          tickLine={false}
          axisLine={false}
          width={62}
        />

        <Tooltip content={<CustomTooltip />} />

        <Area
          type="monotone"
          dataKey="Compte courant"
          stackId="1"
          stroke="#94a3b8"
          strokeWidth={1.5}
          fill="url(#gradCC)"
        />
        <Area
          type="monotone"
          dataKey="Livret A"
          stackId="1"
          stroke="#38bdf8"
          strokeWidth={1.5}
          fill="url(#gradLA)"
        />
        <Area
          type="monotone"
          dataKey="PEA"
          stackId="1"
          stroke="#4ade80"
          strokeWidth={1.5}
          fill="url(#gradPEA)"
        />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);

// ─── Main component ───────────────────────────────────────────────────────────

export default function WealthSimulator() {
  const [form, setForm] = useState<FormState>({
    compteCourant: 5000,
    livretA: 10000,
    pea: 15000,
    peaGrowth: 7,
    years: 10,
  });

  const windowWidth = useWindowWidth();
  const isMobile = windowWidth < 768;

  const set = (key: keyof FormState) => (v: number) =>
    setForm((f) => ({ ...f, [key]: v }));

  const data = useMemo<Record<string, number>[]>(() => {
    const points: Record<string, number>[] = [];
    for (let y = 0; y <= form.years; y++) {
      points.push({
        year: y,
        "Compte courant": Math.round(form.compteCourant),
        "Livret A": Math.round(form.livretA * Math.pow(1.015, y)),
        PEA: Math.round(form.pea * Math.pow(1 + form.peaGrowth / 100, y)),
      });
    }
    return points;
  }, [form]);

  const lastPoint = data[data.length - 1] ?? {};
  const finalTotal =
    (lastPoint["Compte courant"] ?? 0) +
    (lastPoint["Livret A"] ?? 0) +
    (lastPoint["PEA"] ?? 0);

  const chartHeight = isMobile ? 260 : 460;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500;600&family=Syne:wght@400;600;700;800&display=swap');
        html, body { background: #060d14; }
        input[type=number]::-webkit-inner-spin-button,
        input[type=number]::-webkit-outer-spin-button { -webkit-appearance: none; }
        input[type=range] {
          -webkit-appearance: none;
          width: 100%;
          height: 4px;
          border-radius: 2px;
          background: linear-gradient(to right, #38bdf8 var(--val, 25%), #1e3a4a var(--val, 25%));
          outline: none;
          cursor: pointer;
        }
        input[type=range]::-webkit-slider-thumb {
          -webkit-appearance: none;
          width: 16px;
          height: 16px;
          border-radius: 50%;
          background: #38bdf8;
          border: 2px solid #0f1923;
          box-shadow: 0 0 8px rgba(56,189,248,0.5);
        }
      `}</style>

      <div
        style={{
          minHeight: "100vh",
          background: "background",
          display: "flex",
          flexDirection: "column",
          fontFamily: "'Syne', sans-serif",
          padding: isMobile ? "20px 16px 32px" : "32px",
        }}
      >
        {/* ── Header ── */}
        <div style={{ marginBottom: isMobile ? "20px" : "28px" }}>
          <div
            style={{
              display: "inline-block",
              background: "linear-gradient(135deg, #38bdf8, #0ea5e9)",
              borderRadius: "4px",
              padding: "3px 10px",
              fontSize: "10px",
              fontFamily: "'DM Mono', monospace",
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#0f1923",
              fontWeight: 600,
              marginBottom: "8px",
            }}
          >
            Simulateur
          </div>
          <h1
            style={{
              fontSize: isMobile ? "22px" : "clamp(24px, 3vw, 36px)",
              fontWeight: 800,
              color: "foreground",
              letterSpacing: "-0.02em",
              lineHeight: 1.1,
            }}
          >
            Évolution du Patrimoine
          </h1>
          <p
            style={{
              color: "#475569",
              fontFamily: "'DM Mono', monospace",
              fontSize: "12px",
              marginTop: 6,
            }}
          >
            Projection sur {form.years} an{form.years > 1 ? "s" : ""} — Total estimé:{" "}
            <span style={{ color: "#38bdf8", fontWeight: 600 }}>{formatCurrency(finalTotal)}</span>
          </p>
        </div>

        {/* ── Layout : row on desktop, column on mobile ── */}
        <div
          style={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "20px" : "28px",
            flex: 1,
            alignItems: "flex-start",
          }}
        >
          {/* Mobile: chart first for immediate visual feedback */}
          {isMobile && <ChartPanel data={data} chartHeight={chartHeight} />}

          <FormPanel form={form} set={set} lastPoint={lastPoint} isMobile={isMobile} />

          {/* Desktop: chart on the right */}
          {!isMobile && <ChartPanel data={data} chartHeight={chartHeight} />}
        </div>
      </div>
    </>
  );
}