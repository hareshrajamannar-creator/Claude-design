import { useState } from 'react';

// ─── Types ────────────────────────────────────────────────────────────────────
interface Approver {
  id: string;
  name: string;
  initials: string;
  color: string;
  locationType: 'all' | 'partial';
  locations: string[];
}

interface Step {
  id: number;
  title: string;
  approvers: Approver[];
  requireAll: boolean;
}

type CoverageStatus = 'covered' | 'at-risk' | 'empty';

// ─── Icons ───────────────────────────────────────────────────────────────────
const AlertTriangle = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

const CheckCircle = ({ size = 16, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const Plus = ({ size = 14, className = '' }: { size?: number; className?: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/>
  </svg>
);

const XIcon = ({ size = 12 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
  </svg>
);

const ChevronDown = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="6 9 12 15 18 9"/>
  </svg>
);

const GripVertical = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="9" cy="5" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="9" cy="19" r="1"/>
    <circle cx="15" cy="5" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="15" cy="19" r="1"/>
  </svg>
);

const InfoIcon = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
  </svg>
);

const Trash2 = ({ size = 14 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/>
  </svg>
);

const ArrowLeft = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="19" y1="12" x2="5" y2="12"/><polyline points="12 19 5 12 12 5"/>
  </svg>
);

const Settings2 = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
  </svg>
);

// ─── Data ─────────────────────────────────────────────────────────────────────
const INITIAL_STEPS: Step[] = [
  {
    id: 1,
    title: 'Step 1',
    approvers: [
      { id: 'a1', name: 'William Smith', initials: 'WS', color: '#5b7fff', locationType: 'all', locations: [] },
      { id: 'a2', name: 'John Doe', initials: 'JD', color: '#e67e22', locationType: 'partial', locations: ['Atlanta, GA', 'Denver, CO'] },
    ],
    requireAll: false,
  },
  {
    id: 2,
    title: 'Step 2',
    approvers: [
      { id: 'a3', name: 'Aaron Blake', initials: 'AB', color: '#27ae60', locationType: 'partial', locations: ['Atlanta, GA'] },
      { id: 'a4', name: 'Sarah Chen', initials: 'SC', color: '#8e44ad', locationType: 'partial', locations: ['Denver, CO', 'Miami, FL'] },
    ],
    requireAll: false,
  },
  {
    id: 3,
    title: 'Step 3',
    approvers: [
      { id: 'a5', name: 'Mark Rivera', initials: 'MR', color: '#c0392b', locationType: 'all', locations: [] },
    ],
    requireAll: false,
  },
];

const AVAILABLE_APPROVERS: Approver[] = [
  { id: 'n1', name: 'Lisa Park', initials: 'LP', color: '#16a085', locationType: 'all', locations: [] },
  { id: 'n2', name: 'Tom Harris', initials: 'TH', color: '#d35400', locationType: 'partial', locations: ['Atlanta, GA'] },
  { id: 'n3', name: 'Nina Foster', initials: 'NF', color: '#2980b9', locationType: 'all', locations: [] },
];

// ─── Helpers ──────────────────────────────────────────────────────────────────
function getCoverageStatus(step: Step): CoverageStatus {
  if (step.approvers.length === 0) return 'empty';
  if (step.approvers.some(a => a.locationType === 'all')) return 'covered';
  return 'at-risk';
}

// ─── Avatar ───────────────────────────────────────────────────────────────────
function Avatar({ initials, color, size = 28 }: { initials: string; color: string; size?: number }) {
  return (
    <div
      style={{
        width: size, height: size, backgroundColor: color, borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: size * 0.36, color: 'white', fontWeight: 600, flexShrink: 0,
      }}
    >
      {initials}
    </div>
  );
}

// ─── Approver Chip ────────────────────────────────────────────────────────────
function ApproverChip({ approver, onRemove, highlighted }: { approver: Approver; onRemove: () => void; highlighted: boolean }) {
  return (
    <div style={{
      display: 'inline-flex', alignItems: 'center', gap: 6,
      padding: '4px 8px 4px 4px',
      borderRadius: 20,
      border: `1.5px solid ${highlighted ? '#ff9800' : approver.locationType === 'all' ? '#e3f0ff' : '#f0e6ff'}`,
      background: highlighted ? '#fff8e1' : approver.locationType === 'all' ? '#f0f7ff' : '#faf0ff',
      fontSize: 13,
    }}>
      <Avatar initials={approver.initials} color={approver.color} size={22} />
      <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.2 }}>
        <span style={{ color: '#212121', fontWeight: 500, whiteSpace: 'nowrap' }}>{approver.name}</span>
        <span style={{ fontSize: 11, color: approver.locationType === 'all' ? '#1976d2' : '#7b52ab', fontWeight: 500 }}>
          {approver.locationType === 'all' ? '✓ All locations' : `${approver.locations.length} location${approver.locations.length !== 1 ? 's' : ''}`}
        </span>
      </div>
      <button
        onClick={onRemove}
        style={{ display: 'flex', alignItems: 'center', color: '#aaa', background: 'none', border: 'none', cursor: 'pointer', padding: 0, marginLeft: 2 }}
        title="Remove"
      >
        <XIcon size={11} />
      </button>
    </div>
  );
}

// ─── Coverage Banner ──────────────────────────────────────────────────────────
function CoverageBanner({ status, onAddAllLocations }: { status: CoverageStatus; onAddAllLocations: () => void }) {
  if (status === 'covered') {
    return (
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '8px 12px', borderRadius: 6,
        background: '#f0faf4', border: '1px solid #b7e4c7',
        fontSize: 12, color: '#1e7e34',
      }}>
        <CheckCircle size={14} />
        <span>Step has full location coverage — no posts will go unattended.</span>
      </div>
    );
  }
  if (status === 'at-risk') {
    return (
      <div style={{
        display: 'flex', alignItems: 'flex-start', gap: 8,
        padding: '10px 12px', borderRadius: 6,
        background: '#fff8e1', border: '1px solid #ffe082',
        fontSize: 12,
      }}>
        <AlertTriangle size={14} className="text-orange-700 shrink-0 mt-[1px]" />
        <div style={{ flex: 1 }}>
          <div style={{ color: '#bf360c', fontWeight: 600, marginBottom: 2 }}>No all-locations approver on this step</div>
          <div style={{ color: '#6d4c41', lineHeight: 1.5, marginBottom: 8 }}>
            Posts for locations not covered by any approver will go unattended. Add at least one approver with access to all locations.
          </div>
          <button
            onClick={onAddAllLocations}
            style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '5px 12px', borderRadius: 4,
              background: '#fff', border: '1px solid #ffb300',
              color: '#e65100', fontSize: 12, fontWeight: 600, cursor: 'pointer',
            }}
          >
            <Plus size={12} /> Add all-locations approver
          </button>
        </div>
      </div>
    );
  }
  return null;
}

// ─── Step Card ────────────────────────────────────────────────────────────────
function StepCard({
  step, stepNumber, onRemoveApprover, onAddApprover, onDelete, totalSteps,
}: {
  step: Step; stepNumber: number;
  onRemoveApprover: (stepId: number, approverId: string) => void;
  onAddApprover: (stepId: number, approver: Approver) => void;
  onDelete: (stepId: number) => void;
  totalSteps: number;
}) {
  const status = getCoverageStatus(step);
  const [showDropdown, setShowDropdown] = useState(false);
  const [requireAll, setRequireAll] = useState(step.requireAll);

  const existingIds = step.approvers.map(a => a.id);
  const available = AVAILABLE_APPROVERS.filter(a => !existingIds.includes(a.id));
  const allLocationsAvailable = available.filter(a => a.locationType === 'all');
  const otherAvailable = available.filter(a => a.locationType === 'partial');

  const handleAddAllLocations = () => {
    if (allLocationsAvailable.length > 0) {
      onAddApprover(step.id, allLocationsAvailable[0]);
    }
  };

  return (
    <div style={{
      background: 'white', border: '1px solid #eaeaea', borderRadius: 10,
      overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)',
    }}>
      {/* Step header */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        padding: '12px 16px', borderBottom: '1px solid #f5f5f5', background: '#fafafa',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{ color: '#ccc', cursor: 'grab' }}><GripVertical size={14} /></div>
          <div style={{
            width: 22, height: 22, borderRadius: '50%',
            background: '#1976d2', color: 'white',
            fontSize: 11, fontWeight: 700,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>{stepNumber}</div>
          <span style={{ fontSize: 14, fontWeight: 600, color: '#212121' }}>{step.title}</span>
          {status === 'at-risk' && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '2px 8px', borderRadius: 10,
              background: '#fff3e0', border: '1px solid #ffe082',
              fontSize: 11, color: '#e65100', fontWeight: 600,
            }}>
              <AlertTriangle size={10} /> Incomplete coverage
            </span>
          )}
          {status === 'covered' && (
            <span style={{
              display: 'inline-flex', alignItems: 'center', gap: 4,
              padding: '2px 8px', borderRadius: 10,
              background: '#f0faf4', border: '1px solid #b7e4c7',
              fontSize: 11, color: '#1e7e34', fontWeight: 600,
            }}>
              <CheckCircle size={10} /> All locations covered
            </span>
          )}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <label style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#555', cursor: 'pointer' }}>
            <input
              type="checkbox"
              checked={requireAll}
              onChange={e => setRequireAll(e.target.checked)}
              style={{ accentColor: '#1976d2' }}
            />
            Require all approvers
          </label>
          {totalSteps > 1 && (
            <button
              onClick={() => onDelete(step.id)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#ccc', padding: 4, display: 'flex' }}
              title="Delete step"
            >
              <Trash2 size={14} />
            </button>
          )}
        </div>
      </div>

      {/* Approvers area */}
      <div style={{ padding: '14px 16px' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: step.approvers.length > 0 ? 12 : 0 }}>
          {step.approvers.map(approver => (
            <ApproverChip
              key={approver.id}
              approver={approver}
              onRemove={() => onRemoveApprover(step.id, approver.id)}
              highlighted={status === 'at-risk' && approver.locationType === 'partial'}
            />
          ))}

          {/* Add approver button */}
          <div style={{ position: 'relative' }}>
            <button
              onClick={() => setShowDropdown(!showDropdown)}
              style={{
                display: 'inline-flex', alignItems: 'center', gap: 5,
                padding: '5px 12px', borderRadius: 20,
                border: '1.5px dashed #bbb', background: 'white',
                fontSize: 13, color: '#555', cursor: 'pointer',
              }}
            >
              <Plus size={12} /> Add approver <ChevronDown size={12} />
            </button>
            {showDropdown && (
              <>
                {/* Backdrop */}
                <div
                  style={{ position: 'fixed', inset: 0, zIndex: 9 }}
                  onClick={() => setShowDropdown(false)}
                />
                <div style={{
                  position: 'absolute', top: 'calc(100% + 4px)', left: 0, zIndex: 10,
                  background: 'white', border: '1px solid #e0e0e0', borderRadius: 8,
                  boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
                  minWidth: 260, overflow: 'hidden',
                }}>
                  {allLocationsAvailable.length > 0 && (
                    <>
                      <div style={{ padding: '6px 12px 4px', fontSize: 11, color: '#1976d2', fontWeight: 700, background: '#f0f7ff', letterSpacing: 0.5 }}>
                        ✓ ALL LOCATIONS
                      </div>
                      {allLocationsAvailable.map(a => (
                        <button key={a.id}
                          onClick={() => { onAddApprover(step.id, a); setShowDropdown(false); }}
                          style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                          onMouseEnter={e => (e.currentTarget.style.background = '#f5f5f5')}
                          onMouseLeave={e => (e.currentTarget.style.background = 'none')}
                        >
                          <Avatar initials={a.initials} color={a.color} size={26} />
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 500, color: '#212121' }}>{a.name}</div>
                            <div style={{ fontSize: 11, color: '#1976d2' }}>All locations</div>
                          </div>
                        </button>
                      ))}
                    </>
                  )}
                  {otherAvailable.length > 0 && (
                    <>
                      <div style={{ padding: '6px 12px 4px', fontSize: 11, color: '#7b52ab', fontWeight: 700, background: '#faf0ff', letterSpacing: 0.5 }}>
                        SPECIFIC LOCATIONS
                      </div>
                      {otherAvailable.map(a => (
                        <button key={a.id}
                          onClick={() => { onAddApprover(step.id, a); setShowDropdown(false); }}
                          style={{ width: '100%', display: 'flex', alignItems: 'center', gap: 10, padding: '8px 12px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'left' }}
                          onMouseEnter={e => (e.currentTarget.style.background = '#f5f5f5')}
                          onMouseLeave={e => (e.currentTarget.style.background = 'none')}
                        >
                          <Avatar initials={a.initials} color={a.color} size={26} />
                          <div>
                            <div style={{ fontSize: 13, fontWeight: 500, color: '#212121' }}>{a.name}</div>
                            <div style={{ fontSize: 11, color: '#7b52ab' }}>{a.locations.join(', ')}</div>
                          </div>
                        </button>
                      ))}
                    </>
                  )}
                  {available.length === 0 && (
                    <div style={{ padding: '12px', fontSize: 13, color: '#aaa' }}>No more approvers to add</div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>

        {/* Coverage banner */}
        <CoverageBanner status={status} onAddAllLocations={handleAddAllLocations} />
      </div>
    </div>
  );
}

// ─── Legend ───────────────────────────────────────────────────────────────────
function Legend() {
  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 20,
      padding: '8px 14px', borderRadius: 8,
      background: '#f5f8ff', border: '1px solid #e3ecff', fontSize: 12,
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <div style={{ width: 10, height: 10, borderRadius: 3, background: '#e8f1ff', border: '1.5px solid #90caf9' }} />
        <span style={{ color: '#1976d2', fontWeight: 500 }}>All locations</span>
        <span style={{ color: '#888' }}>— covers every location</span>
      </div>
      <div style={{ width: 1, height: 16, background: '#dde' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <div style={{ width: 10, height: 10, borderRadius: 3, background: '#f3e8ff', border: '1.5px solid #ce93d8' }} />
        <span style={{ color: '#7b52ab', fontWeight: 500 }}>Partial locations</span>
        <span style={{ color: '#888' }}>— covers selected locations only</span>
      </div>
      <div style={{ width: 1, height: 16, background: '#dde' }} />
      <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
        <AlertTriangle size={11} className="text-orange-700" />
        <span style={{ color: '#e65100', fontWeight: 500 }}>Incomplete coverage</span>
        <span style={{ color: '#888' }}>— risk of unattended posts</span>
      </div>
    </div>
  );
}

// ─── Global Coverage Bar ──────────────────────────────────────────────────────
function GlobalCoverageBar({ steps }: { steps: Step[] }) {
  const atRisk = steps.filter(s => getCoverageStatus(s) === 'at-risk').length;
  const total = steps.length;

  return (
    <div style={{
      display: 'flex', alignItems: 'center', gap: 12,
      padding: '10px 16px', borderRadius: 8,
      background: atRisk > 0 ? '#fff8e1' : '#f0faf4',
      border: `1px solid ${atRisk > 0 ? '#ffe082' : '#b7e4c7'}`,
      fontSize: 13,
    }}>
      {atRisk > 0 ? (
        <>
          <AlertTriangle size={16} className="text-orange-700 shrink-0" />
          <span style={{ color: '#bf360c', fontWeight: 600 }}>{atRisk} of {total} step{atRisk !== 1 ? 's' : ''} missing full location coverage</span>
          <span style={{ color: '#795548' }}>— posts may go unattended. Add an all-locations approver to each flagged step.</span>
        </>
      ) : (
        <>
          <CheckCircle size={16} className="text-green-700 shrink-0" />
          <span style={{ color: '#1e7e34', fontWeight: 600 }}>All {total} steps have full location coverage</span>
          <span style={{ color: '#555' }}>— workflow is ready to save.</span>
        </>
      )}
    </div>
  );
}

// ─── Workflow List View ───────────────────────────────────────────────────────
interface Workflow {
  id: string;
  name: string;
  steps: number;
  appliesTo: string;
  status: 'active' | 'draft';
}

const MOCK_WORKFLOWS: Workflow[] = [
  { id: 'wf1', name: 'Compliance check', steps: 3, appliesTo: 'All locations', status: 'active' },
  { id: 'wf2', name: 'Legal review', steps: 2, appliesTo: '5 locations', status: 'active' },
  { id: 'wf3', name: 'Brand approval', steps: 1, appliesTo: 'All locations', status: 'draft' },
];

function WorkflowList({ onEdit }: { onEdit: (wfId: string) => void }) {
  return (
    <div style={{ padding: '24px 32px', fontFamily: 'sans-serif' }}>
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 24 }}>
        <div>
          <h1 style={{ fontSize: 20, fontWeight: 700, color: '#212121', margin: 0, marginBottom: 4 }}>Approval workflows</h1>
          <p style={{ fontSize: 13, color: '#757575', margin: 0 }}>
            Configure multi-step approval flows for social posts before they go live.
          </p>
        </div>
        <button
          onClick={() => onEdit('new')}
          style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            padding: '9px 18px', borderRadius: 6,
            background: '#1976d2', border: 'none',
            color: 'white', fontSize: 13, fontWeight: 600, cursor: 'pointer',
          }}
        >
          <Plus size={14} /> New workflow
        </button>
      </div>

      {/* Info banner */}
      <div style={{
        display: 'flex', gap: 10, padding: '12px 16px',
        background: '#f0f7ff', border: '1px solid #bbdefb',
        borderRadius: 8, marginBottom: 20, fontSize: 13, color: '#1565c0',
      }}>
        <InfoIcon size={16} />
        <span>
          Approval workflows ensure posts are reviewed before publishing. Each workflow can have up to 10 sequential steps with location-specific approvers.
        </span>
      </div>

      {/* Workflow cards */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {MOCK_WORKFLOWS.map(wf => (
          <div key={wf.id} style={{
            background: 'white', border: '1px solid #eaeaea', borderRadius: 10,
            padding: '16px 20px', display: 'flex', alignItems: 'center', justifyContent: 'space-between',
            boxShadow: '0 1px 3px rgba(0,0,0,0.04)',
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{
                width: 40, height: 40, borderRadius: 8,
                background: '#f0f7ff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                flexShrink: 0,
              }}>
                <Settings2 size={18} />
              </div>
              <div>
                <div style={{ fontSize: 14, fontWeight: 600, color: '#212121', marginBottom: 2 }}>{wf.name}</div>
                <div style={{ fontSize: 12, color: '#757575', display: 'flex', gap: 12 }}>
                  <span>{wf.steps} step{wf.steps !== 1 ? 's' : ''}</span>
                  <span>·</span>
                  <span>{wf.appliesTo}</span>
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <span style={{
                padding: '3px 10px', borderRadius: 12, fontSize: 11, fontWeight: 600,
                background: wf.status === 'active' ? '#f0faf4' : '#f5f5f5',
                color: wf.status === 'active' ? '#1e7e34' : '#757575',
                border: `1px solid ${wf.status === 'active' ? '#b7e4c7' : '#e0e0e0'}`,
              }}>
                {wf.status === 'active' ? 'Active' : 'Draft'}
              </span>
              <button
                onClick={() => onEdit(wf.id)}
                style={{
                  padding: '6px 14px', borderRadius: 5,
                  border: '1px solid #e0e0e0', background: 'white',
                  fontSize: 13, color: '#212121', cursor: 'pointer', fontWeight: 500,
                }}
                onMouseEnter={e => (e.currentTarget.style.background = '#f5f5f5')}
                onMouseLeave={e => (e.currentTarget.style.background = 'white')}
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Workflow Editor ──────────────────────────────────────────────────────────
function WorkflowEditor({ workflowId, onBack }: { workflowId: string; onBack: () => void }) {
  const [steps, setSteps] = useState<Step[]>(INITIAL_STEPS);
  const [workflowName, setWorkflowName] = useState(
    workflowId === 'wf2' ? 'Legal review' : workflowId === 'wf3' ? 'Brand approval' : 'Compliance check'
  );
  const [saved, setSaved] = useState(false);

  const removeApprover = (stepId: number, approverId: string) => {
    setSteps(prev => prev.map(s =>
      s.id === stepId ? { ...s, approvers: s.approvers.filter(a => a.id !== approverId) } : s
    ));
  };

  const addApprover = (stepId: number, approver: Approver) => {
    setSteps(prev => prev.map(s =>
      s.id === stepId ? { ...s, approvers: [...s.approvers, approver] } : s
    ));
  };

  const deleteStep = (stepId: number) => {
    setSteps(prev => prev.filter(s => s.id !== stepId));
  };

  const addStep = () => {
    if (steps.length >= 10) return;
    const newId = Math.max(...steps.map(s => s.id)) + 1;
    setSteps(prev => [...prev, { id: newId, title: `Step ${newId}`, approvers: [], requireAll: false }]);
  };

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div style={{ minHeight: '100%', background: '#f5f6fa', fontFamily: 'sans-serif' }}>
      {/* Editor top bar */}
      <div style={{
        background: 'white', borderBottom: '1px solid #eaeaea',
        padding: '0 24px', height: 52,
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        position: 'sticky', top: 0, zIndex: 5,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <button
            onClick={onBack}
            style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', cursor: 'pointer', color: '#757575', fontSize: 13 }}
          >
            <ArrowLeft size={15} /> Back
          </button>
          <span style={{ color: '#e0e0e0' }}>|</span>
          <span style={{ fontSize: 13, color: '#757575' }}>Settings</span>
          <span style={{ color: '#ccc' }}>›</span>
          <span style={{ fontSize: 13, color: '#757575' }}>Approvals</span>
          <span style={{ color: '#ccc' }}>›</span>
          <span style={{ fontSize: 14, color: '#212121', fontWeight: 600 }}>{workflowName}</span>
        </div>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          {saved && (
            <span style={{ fontSize: 12, color: '#1e7e34', display: 'flex', alignItems: 'center', gap: 4 }}>
              <CheckCircle size={13} /> Saved
            </span>
          )}
          <button
            onClick={onBack}
            style={{ padding: '7px 16px', borderRadius: 5, border: '1px solid #e0e0e0', background: 'white', fontSize: 13, cursor: 'pointer', color: '#555' }}
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            style={{ padding: '7px 16px', borderRadius: 5, border: 'none', background: '#1976d2', fontSize: 13, cursor: 'pointer', color: 'white', fontWeight: 600 }}
          >
            Save workflow
          </button>
        </div>
      </div>

      <div style={{ maxWidth: 760, margin: '0 auto', padding: '24px 24px 48px' }}>
        {/* Workflow info card */}
        <div style={{ background: 'white', border: '1px solid #eaeaea', borderRadius: 10, padding: '16px 20px', marginBottom: 16 }}>
          <div style={{ marginBottom: 12 }}>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>WORKFLOW NAME</label>
            <input
              value={workflowName}
              onChange={e => setWorkflowName(e.target.value)}
              style={{ width: '100%', padding: '8px 12px', border: '1px solid #e0e0e0', borderRadius: 4, fontSize: 14, boxSizing: 'border-box', outline: 'none' }}
              onFocus={e => (e.target.style.borderColor = '#1976d2')}
              onBlur={e => (e.target.style.borderColor = '#e0e0e0')}
            />
          </div>
          <div>
            <label style={{ fontSize: 12, fontWeight: 600, color: '#555', display: 'block', marginBottom: 4 }}>APPLIES TO</label>
            <button style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '7px 12px', border: '1px solid #e0e0e0', borderRadius: 4, background: 'white', fontSize: 13, color: '#555', cursor: 'pointer' }}>
              All locations <ChevronDown size={13} />
            </button>
          </div>
        </div>

        {/* Legend */}
        <div style={{ marginBottom: 14 }}><Legend /></div>

        {/* Global coverage status */}
        <div style={{ marginBottom: 20 }}><GlobalCoverageBar steps={steps} /></div>

        {/* Steps */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          {steps.map((step, i) => (
            <StepCard
              key={step.id}
              step={step}
              stepNumber={i + 1}
              totalSteps={steps.length}
              onRemoveApprover={removeApprover}
              onAddApprover={addApprover}
              onDelete={deleteStep}
            />
          ))}
        </div>

        {/* Add step */}
        {steps.length < 10 && (
          <button
            onClick={addStep}
            style={{
              marginTop: 14, width: '100%', padding: '12px',
              border: '2px dashed #d0d0d0', borderRadius: 10,
              background: 'white', color: '#888', fontSize: 14,
              cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = '#1976d2'; e.currentTarget.style.color = '#1976d2'; e.currentTarget.style.background = '#f0f7ff'; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = '#d0d0d0'; e.currentTarget.style.color = '#888'; e.currentTarget.style.background = 'white'; }}
          >
            <Plus size={14} /> Add step ({steps.length}/10)
          </button>
        )}

        {/* Bottom explainer */}
        <div style={{
          marginTop: 20, padding: '12px 16px', borderRadius: 8,
          background: '#f0f7ff', border: '1px solid #bbdefb',
          fontSize: 12, color: '#1565c0', lineHeight: 1.6,
          display: 'flex', gap: 8,
        }}>
          <InfoIcon size={14} />
          <span>
            <strong>Why does this matter?</strong> If a post needs approval but no approver covers a given location, that location's post will be stuck in "awaiting" until the scheduled time passes and expires. Adding at least one <strong>all-locations</strong> approver per step ensures every post always has someone who can act on it.
          </span>
        </div>
      </div>
    </div>
  );
}

// ─── Main Export ──────────────────────────────────────────────────────────────
export function ApprovalsSetupView() {
  const [editingWorkflowId, setEditingWorkflowId] = useState<string | null>(null);

  if (editingWorkflowId) {
    return (
      <WorkflowEditor
        workflowId={editingWorkflowId}
        onBack={() => setEditingWorkflowId(null)}
      />
    );
  }

  return <WorkflowList onEdit={id => setEditingWorkflowId(id)} />;
}
