// Pressure over one beat for a chamber, drawn as SVG beside the model. Page usage: card: { kind: pressure-curve, chamber: left-ventricle }
export default function pressureCurve({ chamber, systolic = 120, diastolic = 8 }) {
  if (!chamber) throw new Error('pressure-curve needs a chamber id');
  return { chamber, points: [[0, diastolic], [0.3, systolic], [0.45, systolic * 0.9], [0.55, diastolic], [1, diastolic]] };
}
