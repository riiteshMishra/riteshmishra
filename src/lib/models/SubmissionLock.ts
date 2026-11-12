import { Schema, model, models } from "mongoose";

// Short-lived lock used for atomic, cross-instance cooldown/duplicate protection.
// Documents expire automatically after 10 minutes via TTL index.
const SubmissionLockSchema = new Schema(
  {
    key: { type: String, required: true, unique: true, index: true },
    createdAt: { type: Date, default: () => new Date(), expires: 600 },
  },
  { timestamps: false }
);

const SubmissionLock =
  models.SubmissionLock || model("SubmissionLock", SubmissionLockSchema);

export default SubmissionLock;