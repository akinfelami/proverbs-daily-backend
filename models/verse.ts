import {model, Schema} from 'mongoose'

interface Verse {
    id: string
    content: string
    createdAt: Date | number
}

const verseSchema = new Schema<Verse>({
    content :
    {type: String, required: true},
    createdAt :{type: Date, required: true}
})

const Verse = model<Verse>('Verse', verseSchema)
export default Verse