import { Schema, model, models, type InferSchemaType } from "mongoose";

const ContactMessageSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      maxlength: 100,
    },

    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      maxlength: 254,
    },

    phone: {
      type: String,
      trim: true,
      default: "",
      maxlength: 30,
    },
    normalizedPhone: {
      type: String,
      default: "",
      index: true,
    },
    subject: { type: String, required: true, trim: true, maxlength: 150 },
    message: { type: String, required: true, trim: true, maxlength: 5000 },
    isResolved: { type: Boolean, default: false, index: true },
    resolvedAt: { type: Date, default: null },
    contentHash: { type: String, default: "", index: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } },
);

ContactMessageSchema.index({ email: 1, createdAt: -1 });
ContactMessageSchema.index({ createdAt: -1 });

export type ContactMessageDoc = InferSchemaType<typeof ContactMessageSchema> & {
  _id: unknown;
};

const ContactMessage =
  models.ContactMessage || model("ContactMessage", ContactMessageSchema);

export default ContactMessage;
