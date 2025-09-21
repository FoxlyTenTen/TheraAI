import { useState } from "react";

type Milestone = {
  phase: string;
  duration: string;
  goal: string;
  steps: string[];
  completedSteps?: boolean[]; // track completion of each step
};

const MilestoneTracker = () => {
  const [loading, setLoading] = useState(false);
  const [milestones, setMilestones] = useState<Milestone[]>([]);

  const fetchMilestones = async () => {
    setLoading(true);
    try {
      const response = await fetch("http://localhost:3000/api/milestones");
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data: Milestone[] = await response.json();

      // Initialize completedSteps array
      setMilestones(
        data.map(m => ({
          ...m,
          completedSteps: new Array(m.steps.length).fill(false),
        }))
      );
    } catch (error) {
      console.error("❌ Error fetching milestones:", error);
    } finally {
      setLoading(false);
    }
  };

  const toggleStep = (milestoneIndex: number, stepIndex: number) => {
    setMilestones(prev =>
      prev.map((m, i) => {
        if (i === milestoneIndex && m.completedSteps) {
          const updatedSteps = [...m.completedSteps];
          updatedSteps[stepIndex] = !updatedSteps[stepIndex];
          return { ...m, completedSteps: updatedSteps };
        }
        return m;
      })
    );
  };

  const isPhaseCompleted = (m: Milestone) =>
    m.completedSteps?.every(step => step) ?? false;

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <button
        onClick={fetchMilestones}
        disabled={loading}
        style={{ padding: "10px 20px", marginBottom: "20px" }}
      >
        {loading ? "Loading..." : "Get Milestones"}
      </button>

      <div style={{ display: "grid", gap: "20px", maxWidth: "800px", margin: "0 auto" }}>
        {milestones.map((m, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ddd",
              borderRadius: "10px",
              padding: "20px",
              textAlign: "left",
              backgroundColor: isPhaseCompleted(m) ? "#e6ffe6" : "#fff",
              boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
            }}
          >
            <h3 style={{ marginBottom: "8px", color: "#333" }}>{m.phase}</h3>
            <p><strong>Duration:</strong> {m.duration}</p>
            <p><strong>Goal:</strong> {m.goal}</p>

            <div>
              <strong>Steps:</strong>
              <ul style={{ listStyle: "none", paddingLeft: 0 }}>
                {m.steps.map((step, stepIdx) => (
                  <li key={stepIdx} style={{ marginBottom: "6px" }}>
                    <label style={{ cursor: "pointer" }}>
                      <input
                        type="checkbox"
                        checked={m.completedSteps?.[stepIdx] || false}
                        onChange={() => toggleStep(idx, stepIdx)}
                        style={{ marginRight: "8px" }}
                      />
                      {step}
                    </label>
                  </li>
                ))}
              </ul>
            </div>

            {isPhaseCompleted(m) && (
              <p style={{ color: "#4caf50", fontWeight: "bold" }}>Phase Completed ✅</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MilestoneTracker;
