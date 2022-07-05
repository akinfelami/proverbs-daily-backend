import {model, Schema} from 'mongoose'

interface Verse {
    id?: string
    content: string
    createdAt: Date | number
    reference: string
    translation: string

}

const verseSchema = new Schema<Verse>({
    content :
    {
        type: String, 
        required: true
    },
    // {timestamps: true}
    // createdAt :
    // {
    //     type: Date, 
    //     required: true,
    //     default: null
    // },
    reference: 
    {
        type: String,
        required: true
    },
    translation: 
    {
        type: String,
        required: true
    }
    
}, { timestamps: true })

const Verse = model<Verse>('Verse', verseSchema)
export default Verse
