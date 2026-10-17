import React, { useState, useEffect } from 'react';
import { PackageTier, validateContactForm, ContactFormData } from '../utils/pricing.ts';
import { FadeIn } from './FadeIn.tsx';
import { useLanguage } from '../context/LanguageContext.tsx';
import { Send, CheckCircle2, Calendar, ArrowRight, MessageCircle } from 'lucide-react';

interface ContactPageProps {
  initialPackage?: PackageTier | '';
  onOpenStrategyModal: () => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({
  initialPackage = '',
  onOpenStrategyModal
}) => {
  const { language, t } = useLanguage();
  const isEn = language === 'EN';

  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    email: '',
    phone: '',
    packageSelected: initialPackage
      ? initialPackage === 'PREMIUM'
        ? 'PREMIUM'
        : initialPackage === 'GOAT'
        ? 'GOAT'
        : 'PLATINUM'
      : 'PREMIUM',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);
  const [submissionSummary, setSubmissionSummary] = useState<string>('');

  useEffect(() => {
    if (initialPackage) {
      setFormData((prev) => ({ ...prev, packageSelected: initialPackage }));
    }
  }, [initialPackage]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateContactForm(formData, language);
    if (!validation.isValid) {
      setErrors(validation.errors);
      return;
    }

    setSubmitted(true);
    setSubmissionSummary(
      isEn
        ? `Thank you ${formData.name} from ${formData.company}. We have received your inquiry for "${formData.packageSelected}" and will respond within 24 hours.`
        : `Bedankt ${formData.name} van ${formData.company}. We hebben je aanvraag voor "${formData.packageSelected}" ontvangen en reageren binnen 24 uur.`
    );
  };

  const whatsappText = encodeURIComponent(
    isEn
      ? `Hi TipTop Marketing! I am interested in the ${formData.packageSelected} package.`
      : `Hoi TipTop Marketing! Ik heb interesse in het ${formData.packageSelected} pakket.`
  );

  return (
    <div className="py-12 sm:py-20 bg-white dark:bg-[#09090B] transition-colors">
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16">
        <FadeIn direction="up">
          <div className="max-w-3xl">
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#A88640] dark:text-[#C6A868] block mb-3">
              {t('contactTag')}
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl font-bold text-zinc-900 dark:text-white tracking-tight">
              {t('contactTitle')}{' '}
              <span className="italic font-normal text-zinc-500 dark:text-zinc-400">
                {t('contactTitleItalic')}
              </span>
            </h1>
            <p className="text-zinc-600 dark:text-zinc-400 mt-4 text-base sm:text-lg leading-relaxed">
              {t('contactSubtitle')}
            </p>
          </div>
        </FadeIn>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Left: Contact Form */}
          <div className="lg:col-span-7">
            <FadeIn direction="up" delay={0.1}>
              <div className="bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 sm:p-10 shadow-sm">
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <div>
                    <h2 className="font-serif text-2xl sm:text-3xl font-bold text-zinc-900 dark:text-white">
                      {t('contactFormHeading')}
                    </h2>
                    <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                      {t('contactFormSubheading')}
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-[#09090B] dark:bg-zinc-800 text-[#C6A868] flex items-center justify-center shrink-0">
                    <Send className="w-4 h-4" />
                  </div>
                </div>

                {submitted ? (
                  <div className="p-8 rounded-2xl bg-[#09090B] text-white border border-[#C6A868] animate-in fade-in">
                    <div className="flex items-start gap-4">
                      <CheckCircle2 className="w-8 h-8 text-[#C6A868] shrink-0 mt-0.5" />
                      <div>
                        <h3 className="font-serif text-2xl font-bold text-[#C6A868]">
                          {t('contactSuccessTitle')}
                        </h3>
                        <p className="text-sm text-zinc-300 mt-2 leading-relaxed">
                          {submissionSummary}
                        </p>
                        <button
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              name: '',
                              company: '',
                              email: '',
                              phone: '',
                              packageSelected: 'PREMIUM',
                              message: ''
                            });
                          }}
                          className="mt-6 text-xs text-zinc-400 hover:text-white underline underline-offset-4 cursor-pointer"
                        >
                          {t('contactNewMessageBtn')}
                        </button>
                      </div>
                    </div>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                          {t('contactNameLabel')}
                        </label>
                        <input
                          id="name"
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          placeholder={t('contactNamePlaceholder')}
                          className={`w-full px-4 py-3.5 rounded-xl bg-white dark:bg-zinc-950 border text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none transition ${
                            errors.name
                              ? 'border-red-500 ring-1 ring-red-500'
                              : 'border-zinc-300 dark:border-zinc-800 focus:border-[#C6A868] dark:focus:border-[#C6A868]'
                          }`}
                        />
                        {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
                      </div>

                      <div>
                        <label htmlFor="company" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                          {t('contactCompanyLabel')}
                        </label>
                        <input
                          id="company"
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          placeholder={t('contactCompanyPlaceholder')}
                          className={`w-full px-4 py-3.5 rounded-xl bg-white dark:bg-zinc-950 border text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none transition ${
                            errors.company
                              ? 'border-red-500 ring-1 ring-red-500'
                              : 'border-zinc-300 dark:border-zinc-800 focus:border-[#C6A868] dark:focus:border-[#C6A868]'
                          }`}
                        />
                        {errors.company && <p className="text-xs text-red-500 mt-1">{errors.company}</p>}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label htmlFor="email" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                          {t('contactEmailLabel')}
                        </label>
                        <input
                          id="email"
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          placeholder={t('contactEmailPlaceholder')}
                          className={`w-full px-4 py-3.5 rounded-xl bg-white dark:bg-zinc-950 border text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none transition ${
                            errors.email
                              ? 'border-red-500 ring-1 ring-red-500'
                              : 'border-zinc-300 dark:border-zinc-800 focus:border-[#C6A868] dark:focus:border-[#C6A868]'
                          }`}
                        />
                        {errors.email && <p className="text-xs text-red-500 mt-1">{errors.email}</p>}
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                          {t('contactPhoneLabel')}
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder={t('contactPhonePlaceholder')}
                          className={`w-full px-4 py-3.5 rounded-xl bg-white dark:bg-zinc-950 border text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none transition ${
                            errors.phone
                              ? 'border-red-500 ring-1 ring-red-500'
                              : 'border-zinc-300 dark:border-zinc-800 focus:border-[#C6A868] dark:focus:border-[#C6A868]'
                          }`}
                        />
                        {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
                      </div>
                    </div>

                    <div>
                      <label htmlFor="packageSelected" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                        {t('contactPackageLabel')}
                      </label>
                      <select
                        id="packageSelected"
                        name="packageSelected"
                        value={formData.packageSelected}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm font-semibold text-zinc-900 dark:text-white focus:outline-none focus:border-[#C6A868] dark:focus:border-[#C6A868] transition"
                      >
                        <option value="PREMIUM">{t('contactPkgOption2')}</option>
                        <option value="PLATINUM">{t('contactPkgOption1')}</option>
                        <option value="GOAT">{t('contactPkgOption3')}</option>
                        <option value="CUSTOM">{t('contactPkgOptionCustom')}</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-zinc-700 dark:text-zinc-300 mb-2">
                        {t('contactGoalsLabel')}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={4}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder={t('contactGoalsPlaceholder')}
                        className="w-full px-4 py-3.5 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-300 dark:border-zinc-800 text-sm text-zinc-900 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:border-[#C6A868] dark:focus:border-[#C6A868] transition"
                      />
                    </div>

                    <div className="space-y-3 pt-1">
                      <button
                        type="submit"
                        className="w-full py-4 rounded-xl bg-[#09090B] dark:bg-white text-white dark:text-[#09090B] hover:bg-zinc-800 dark:hover:bg-[#C6A868] font-bold text-xs uppercase tracking-widest transition-all duration-200 shadow-md flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span>{t('contactSubmitBtn')}</span>
                        <ArrowRight className="w-4 h-4 text-[#C6A868] dark:text-[#09090B]" />
                      </button>

                      <a
                        href={`https://wa.me/31683921044?text=${whatsappText}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 text-zinc-700 dark:text-zinc-300 hover:border-[#C6A868] hover:text-zinc-950 dark:hover:text-white text-xs font-semibold flex items-center justify-center gap-2 transition"
                      >
                        <MessageCircle className="w-4 h-4 text-emerald-500" />
                        <span>{t('contactWhatsAppDirect')}</span>
                      </a>
                    </div>
                  </form>
                )}
              </div>
            </FadeIn>
          </div>

          {/* Right: Direct Strategy Call Box & Social Channels */}
          <div className="lg:col-span-5 space-y-8">
            <FadeIn direction="up" delay={0.2}>
              <div className="bg-[#09090B] dark:bg-zinc-900 text-white rounded-3xl p-8 border border-zinc-800 shadow-xl relative overflow-hidden">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C6A868]/15 text-[#C6A868] text-[11px] font-semibold uppercase tracking-wider mb-4">
                  <Calendar className="w-3.5 h-3.5" />
                  <span>30 Min</span>
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold">
                  {t('contactSidebarTitle')}
                </h3>
                <p className="text-sm text-zinc-400 mt-3 leading-relaxed">
                  {t('contactSidebarDesc')}
                </p>
                <button
                  onClick={onOpenStrategyModal}
                  className="mt-6 w-full py-4 rounded-xl metallic-badge text-[#09090B] font-extrabold text-xs uppercase tracking-widest hover:opacity-95 transition flex items-center justify-center gap-2 shadow-md cursor-pointer"
                >
                  <Calendar className="w-4 h-4" />
                  <span>{t('contactSidebarBtn')}</span>
                </button>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="bg-zinc-50 dark:bg-zinc-900/70 border border-zinc-200 dark:border-zinc-800 rounded-3xl p-8 space-y-4">
                <h3 className="font-serif text-xl font-bold text-zinc-900 dark:text-white">
                  {t('contactSocialTitle')}
                </h3>
                <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">
                  {t('contactSocialDesc')}
                </p>
                <div className="grid grid-cols-3 gap-3 pt-2">
                  <a
                    href="https://instagram.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-[#C6A868] dark:hover:text-[#09090B] transition text-xs font-semibold text-center shadow-xs"
                  >
                    Instagram
                  </a>
                  <a
                    href="https://tiktok.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-[#C6A868] dark:hover:text-[#09090B] transition text-xs font-semibold text-center shadow-xs"
                  >
                    TikTok
                  </a>
                  <a
                    href="https://wa.me/31683921044"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="py-3 rounded-xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 text-zinc-900 dark:text-white hover:bg-zinc-900 hover:text-white dark:hover:bg-[#C6A868] dark:hover:text-[#09090B] transition text-xs font-semibold text-center shadow-xs"
                  >
                    WhatsApp
                  </a>
                </div>
              </div>
            </FadeIn>

          </div>

        </div>
      </div>
    </div>
  );
};
