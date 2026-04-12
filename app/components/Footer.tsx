export default function Footer() {
  return (
    <footer className="border-t border-emerald-200/80 bg-emerald-50/70 pt-4 backdrop-blur-sm">
      {/* Institute name + address */}
      <div className="mx-auto max-w-7xl px-6 py-3 text-center">
        <p className="text-[11px] font-extrabold uppercase tracking-widest text-emerald-950">
          Invent Institute of Mathematics &amp; Science
        </p>
        <p className="mt-1 text-[10px] uppercase tracking-wide leading-snug text-emerald-900/65">
          560, White House, 40 Feet Road, Arul Nagar, Nandhivaram, Guduvanchery,
          Chengalpet District, Tamilnadu - 603202
        </p>
      </div>

      {/* Bottom bar — copyright + powered by */}
      <div className="border-t border-emerald-200/70">
        <div className="mx-auto flex max-w-7xl flex-col items-center gap-1 px-6 py-2.5 sm:flex-row sm:justify-between">
          <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-900/70">
          Copyright &copy; {new Date().getFullYear()} <br></br>Invent Institute of Mathematics &amp; Science — All Rights Reserved.
          </p>
          <p className="text-[9px] font-bold uppercase tracking-widest text-emerald-900/70">
            Powered and Managed by IT Department of Invent IMS
          </p>
        </div>
      </div>
    </footer>
  );
}
