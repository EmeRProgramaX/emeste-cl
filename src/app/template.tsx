import { MatrixBackground } from "@/components/MatrixBackground";

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <>
      <MatrixBackground />
      <div className="relative z-10">{children}</div>
    </>
  );
}
