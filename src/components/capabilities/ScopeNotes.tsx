import { FileText, ShieldCheck } from 'lucide-react'
import { licensingNote, securityNote } from '../../content/capabilityContent'

/** Licensing and security wording shared by the capability pages. */
const ScopeNotes = () => (
  <div className="grid gap-6 md:grid-cols-2">
    <div className="flex items-start gap-3 rounded-3xl border border-white/40 bg-white/30 p-6 shadow-xl backdrop-blur-md">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
        <FileText className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold text-gray-800">Licensing and costs</h3>
        <p className="leading-relaxed text-gray-600">{licensingNote}</p>
      </div>
    </div>

    <div className="flex items-start gap-3 rounded-3xl border border-white/40 bg-white/30 p-6 shadow-xl backdrop-blur-md">
      <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-100 text-blue-700">
        <ShieldCheck className="h-5 w-5" aria-hidden="true" />
      </div>
      <div>
        <h3 className="mb-2 text-lg font-bold text-gray-800">Security and access</h3>
        <p className="leading-relaxed text-gray-600">{securityNote}</p>
      </div>
    </div>
  </div>
)

export default ScopeNotes
