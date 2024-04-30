import mongoose, { Document, Schema } from 'mongoose';
import { IUser } from './user'; // Assuming you have IUser exported in your User model file

export interface IProject extends Document {
  title: string;
  description: string;
  editorContent: any; // Use `any` or a more specific type if you have a defined structure for the editor content
  user: IUser['_id']; // Reference to User model by ID
}

const projectSchema: Schema<IProject> = new Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  editorContent: { type: Schema.Types.Mixed, required: true }, // For arbitrary JSON objects, use Schema.Types.Mixed
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});


export default mongoose.models.Project || mongoose.model<IProject>('Project', projectSchema);
