export default function Footer() {
  return (
    <footer className="relative mt-24 overflow-hidden border-t border-zinc-800 bg-zinc-950 text-white">

      {/* Glow */}
      <div className="absolute left-1/2 top-0 h-40 w-96 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl"></div>

      <div className="relative mx-auto max-w-7xl px-6 py-12">

        {/* Top */}
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold tracking-widest">
              My-Shop
            </h2>
            <p className="mt-2 max-w-xs text-zinc-400 text-lg font-bold text-center">
             سایت فروشگاهی بهینه با ویژگی های خرید جذاب
            </p>
          </div>

          {/* Links */}
          

        </div>

        {/* Divider */}
        <div className="my-8 h-px bg-zinc-800"></div>

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-4 text-sm text-zinc-500 md:flex-row">

          <p className="text-sm font-bold">
            © {new Date().getFullYear()} تمامی حقوق محفوظ است.
          </p>

          <div className="flex gap-3">
              <a
                href="#"
                className="text-xl font-bold text-decoration-none font-serif"
              >
                رفتن به بالای صفحه
              </a>
          </div>

        </div>

      </div>
    </footer>
  );
}