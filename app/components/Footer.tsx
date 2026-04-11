export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 pt-4">
      {/* Institute name + address */}
      <div className="mx-auto max-w-7xl px-6 py-3 text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-slate-800">
          Invent Institute of Mathematics &amp; Science
        </p>
        <p className="mt-1 text-[10px] text-slate-500 uppercase tracking-wide leading-snug">
          560, White House, 40 Feet Road, Arul Nagar, Nandhivaram, Guduvanchery,
          Chengalpet District, Tamilnadu - 603202
        </p>
      </div>

      {/* Bottom bar — copyright + powered by */}
      <div className="mx-auto max-w-7xl px-6 py-2.5 flex flex-col items-center gap-1 sm:flex-row sm:justify-between">
        <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
          Copyright &copy; {new Date().getFullYear()} Invent Institute of Mathematics &amp; Science — All Rights Reserved.
        </p>
        <p className="text-[9px] font-bold uppercase tracking-widest text-slate-400">
          Powered and Managed by IT Department of IIMS
        </p>
      </div>
    </footer>
  );
}
