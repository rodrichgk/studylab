import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  first_name: string;
  middle_name?: string; // Use ? for optional fields
  last_name: string;
  birth_date: Date;
  location: string;
  language: string;
  email: string;
  email_verified: boolean;
  image_profile: string;
  role: string;
}

const userSchema: Schema<IUser> = new Schema({
  first_name: { type: String, required: true },
  middle_name: { type: String, required: false },
  last_name: { type: String, required: true },
  birth_date: { type: Date, required: true },
  location: { type: String, required: true },
  language: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  email_verified: { type: Boolean, default: false },
  image_profile: { type: String, required: true },
  role: { type: String, required: true },
});

export default mongoose.models.User || mongoose.model<IUser>('User', userSchema);

