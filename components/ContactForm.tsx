'use client'

import { useState, FormEvent, ChangeEvent } from 'react'
import { useLanguage } from '@/contexts/LanguageContext'
import { MOZAMBIQUE_LOCATIONS } from '@/lib/locations'

interface FormData {
  name: string
  email: string
  phone: string
  pickupDate: string
  returnDate: string
  pickupLocation: string
  returnLocation: string
  carType: string
}

// Aceita +258 8X XXX XXXX (com ou sem espaços/traços) ou apenas 8X XXX XXXX
const MOZ_PHONE_REGEX = /^(\+258)?\s?8[2-7]\d{7}$/

const INITIAL_FORM_DATA: FormData = {
  name: '',
  email: '',
  phone: '',
  pickupDate: '',
  returnDate: '',
  pickupLocation: '',
  returnLocation: '',
  carType: 'standard',
}

/**
 * Contact Form Component - Optimized for INP
 *
 * Performance optimizations:
 * - Vanilla form handling (no heavy libraries)
 * - Minimal re-renders (single FormData state)
 * - Client-side validation with fast feedback
 */
export function ContactForm() {
  const { t } = useLanguage()
  const [formData, setFormData] = useState<FormData>(INITIAL_FORM_DATA)
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({})

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof FormData, string>> = {}

    if (!formData.name.trim()) newErrors.name = t('contact.validation.nameRequired')

    if (!formData.email.trim()) newErrors.email = t('contact.validation.emailRequired')
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = t('contact.validation.emailInvalid')

    if (!formData.phone.trim()) newErrors.phone = t('contact.validation.phoneRequired')
    else if (!MOZ_PHONE_REGEX.test(formData.phone.replace(/[\s-]/g, '')))
      newErrors.phone = t('contact.validation.phoneInvalid')

    if (!formData.pickupDate) newErrors.pickupDate = t('contact.validation.dateRequired')
    if (!formData.pickupLocation) newErrors.pickupLocation = t('contact.validation.pickupLocationRequired')

    if (!formData.returnDate) newErrors.returnDate = t('contact.validation.returnDateRequired')
    else if (formData.pickupDate && formData.returnDate <= formData.pickupDate)
      newErrors.returnDate = t('contact.validation.returnDateInvalid')

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
    // Clear error for this field
    if (errors[name as keyof FormData]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (!validateForm()) return

    setStatus('loading')
    setMessage('')

    try {
      const response = await fetch('/api/leads', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (!response.ok) {
        const data = await response.json().catch(() => ({}))
        if (response.status === 409 || data.error === 'unavailable') {
          setStatus('error')
          setMessage(t('contact.validation.unavailable'))
          return
        }
        throw new Error('Failed to submit form')
      }

      setStatus('success')
      setMessage(t('contact.success'))
      setFormData(INITIAL_FORM_DATA)

      // Reset message after 5 seconds
      setTimeout(() => {
        setStatus('idle')
        setMessage('')
      }, 5000)
    } catch (err) {
      setStatus('error')
      setMessage(t('contact.error'))
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="mx-auto max-w-2xl px-4 sm:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t('contact.subtitle')}
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gray-50 dark:bg-gray-800 p-8 rounded-xl">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('contact.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } focus:outline-none focus:border-blue-500 transition-colors`}
              placeholder="Ana Machava"
            />
            {errors.name && (
              <p className="text-red-600 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('contact.email')}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } focus:outline-none focus:border-blue-500 transition-colors`}
              placeholder="ana@example.com"
            />
            {errors.email && (
              <p className="text-red-600 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          {/* Phone Field */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('contact.phone')}
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.phone ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } focus:outline-none focus:border-blue-500 transition-colors`}
              placeholder={t('contact.phonePlaceholder')}
            />
            {errors.phone && (
              <p className="text-red-600 text-sm mt-1">{errors.phone}</p>
            )}
          </div>

          {/* Pickup Date */}
          <div>
            <label htmlFor="pickupDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('contact.pickupDate')}
            </label>
            <input
              type="date"
              id="pickupDate"
              name="pickupDate"
              value={formData.pickupDate}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.pickupDate ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } focus:outline-none focus:border-blue-500 transition-colors`}
            />
            {errors.pickupDate && (
              <p className="text-red-600 text-sm mt-1">{errors.pickupDate}</p>
            )}

          {/* Return Date */}
          <div>
            <label htmlFor="returnDate" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('contact.returnDate')}
            </label>
            <input
              type="date"
              id="returnDate"
              name="returnDate"
              value={formData.returnDate}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.returnDate ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } focus:outline-none focus:border-blue-500 transition-colors`}
            />
            {errors.returnDate && (
              <p className="text-red-600 text-sm mt-1">{errors.returnDate}</p>
            )}
          </div>
          </div>

          {/* Pickup Location */}
          <div>
            <label htmlFor="pickupLocation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('contact.pickupLocation')}
            </label>
            <select
              id="pickupLocation"
              name="pickupLocation"
              value={formData.pickupLocation}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border bg-white dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                errors.pickupLocation ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'
              } focus:outline-none focus:border-blue-500 transition-colors`}
            >
              <option value="">{t('contact.selectLocation')}</option>
              {MOZAMBIQUE_LOCATIONS.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.label}
                </option>
              ))}
            </select>
            {errors.pickupLocation && (
              <p className="text-red-600 text-sm mt-1">{errors.pickupLocation}</p>
            )}
          </div>

          {/* Return Location */}
          <div>
            <label htmlFor="returnLocation" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('contact.returnLocation')}
            </label>
            <select
              id="returnLocation"
              name="returnLocation"
              value={formData.returnLocation}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="">{t('contact.selectLocation')}</option>
              {MOZAMBIQUE_LOCATIONS.map((loc) => (
                <option key={loc.id} value={loc.id}>
                  {loc.label}
                </option>
              ))}
            </select>
          </div>

          {/* Car Type */}
          <div>
            <label htmlFor="carType" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              {t('contact.carType')}
            </label>
            <select
              id="carType"
              name="carType"
              value={formData.carType}
              onChange={handleChange}
              className="w-full px-4 py-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 dark:text-white focus:outline-none focus:border-blue-500 transition-colors"
            >
              <option value="economy">{t('fleet.economy')}</option>
              <option value="standard">{t('fleet.standard')}</option>
              <option value="suv">{t('fleet.suv')}</option>
              <option value="premium">{t('fleet.premium')}</option>
            </select>
          </div>

          {/* Status Messages */}
          {status === 'success' && (
            <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 text-green-800 dark:text-green-300 px-4 py-3 rounded-lg">
              {message}
            </div>
          )}
          {status === 'error' && (
            <div className="bg-red-50 dark:bg-red-900/30 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 px-4 py-3 rounded-lg">
              {message}
            </div>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className="w-full bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 disabled:bg-gray-400 dark:disabled:bg-gray-600 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
          >
            {status === 'loading' ? t('contact.submitting') : t('contact.submit')}
          </button>
        </form>
      </div>
    </section>
  )
}
