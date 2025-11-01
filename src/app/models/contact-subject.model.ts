export interface ContactSubject {
  id: number,
  clientId: number,
  subject: string,
  masterId?: number,
  languageInfoId?: number,
  languageName: string,
  status: number,
  statusText: string,
}
