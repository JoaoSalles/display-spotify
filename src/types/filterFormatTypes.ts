export type filterFormatField = {
    id: string,
    name: string,
    validation?: {  primitiveType: string, entityType?: string, pattern?: string, max?: number, min?: number } 
    values?: Array<{value: string, name: string}>  
}
