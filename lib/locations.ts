/**
 * Localizações de Moçambique disponíveis para levantamento/entrega de viaturas.
 * Inclui as principais cidades e o Aeroporto Internacional de Maputo.
 */
export interface RentalLocation {
  id: string
  label: string
}

export const MOZAMBIQUE_LOCATIONS: RentalLocation[] = [
  { id: 'maputo-cidade', label: 'Maputo - Cidade' },
  { id: 'maputo-aeroporto', label: 'Maputo - Aeroporto Internacional (MPM)' },
  { id: 'matola', label: 'Matola' },
  { id: 'beira', label: 'Beira' },
  { id: 'beira-aeroporto', label: 'Beira - Aeroporto' },
  { id: 'nampula', label: 'Nampula' },
  { id: 'nacala', label: 'Nacala' },
  { id: 'tete', label: 'Tete' },
  { id: 'chimoio', label: 'Chimoio' },
  { id: 'quelimane', label: 'Quelimane' },
  { id: 'pemba', label: 'Pemba' },
  { id: 'xai-xai', label: 'Xai-Xai' },
  { id: 'inhambane', label: 'Inhambane' },
  { id: 'vilanculos', label: 'Vilanculos' },
  { id: 'lichinga', label: 'Lichinga' },
]
