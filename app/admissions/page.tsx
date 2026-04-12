const admissionsFormUrl = process.env.NEXT_PUBLIC_ADMISSIONS_FORM_URL?.trim();

function buildEmbedUrl(url: string) {
    if (url.includes("embedded=true")) {
        return url;
    }

    const separator = url.includes("?") ? "&" : "?";
    return `${url}${separator}embedded=true`;
}

export default function AdmissionsPage() {
    if (!admissionsFormUrl) {
        return (
            <main className="min-h-screen bg-transparent pt-32 pb-20">
                <section className="mx-auto max-w-4xl px-6">
                    <div className="rounded-3xl border border-emerald-100 bg-white p-10 text-center shadow-premium">
                        <h1 className="text-3xl font-black text-emerald-950 sm:text-4xl">
                            Admissions Open For {new Date().getFullYear()}-
                            {new Date().getFullYear() + 1}
                        </h1>
                        <p className="mt-4 text-slate-600">
                            Add your Google Form link in{" "}
                            <span className="font-semibold">
                                NEXT_PUBLIC_ADMISSIONS_FORM_URL
                            </span>{" "}
                            inside <span className="font-semibold">.env.local</span>.
                        </p>
                    </div>
                </section>
            </main>
        );
    }

    const embedUrl = buildEmbedUrl(admissionsFormUrl);

    return (
        <main className="min-h-screen bg-transparent pt-32 pb-20">
            <section className="mx-auto max-w-6xl px-6">
                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                    <div>
                        <h1 className="text-3xl font-black text-emerald-950 sm:text-4xl">
                            Admissions
                        </h1>
                        <p className="mt-2 text-sm text-slate-600">
                            Fill the Google Form below. Responses are stored in Google Sheets
                            automatically.
                        </p>
                    </div>
                    <a
                        href={admissionsFormUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center justify-center rounded-xl border border-emerald-200 bg-white px-5 py-3 text-xs font-bold uppercase tracking-wide text-emerald-700 transition-colors hover:bg-emerald-50"
                    >
                        Open Form in New Tab
                    </a>
                </div>

                <div className="overflow-hidden rounded-3xl border border-emerald-100 bg-white shadow-premium">
                    <iframe
                        title="IIMS Admission Form"
                        src={embedUrl}
                        className="h-300 w-full"
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </section>
        </main>
    );
}
