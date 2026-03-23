// ─── Types ────────────────────────────────────────────────────────────────────

export interface WorkflowApprover {
  id: string;
  name: string;
  isCurrentUser: boolean;
  responded: boolean;
  action?: 'approved' | 'rejected';
  respondedAt?: string;
  rejectionReason?: string;
}

export interface WorkflowStep {
  stepNumber: number;
  title: string;
  status: 'complete' | 'current' | 'locked' | 'rejected';
  approvers: WorkflowApprover[];
}

export interface ApprovalLocation {
  id: string;
  name: string;
  city: string;
  status: 'pending' | 'approved' | 'rejected';
  rejectionReason?: string;
  actionedBy?: string;
  actionedAt?: string;
  isCurrentUserScope: boolean; // false = User Type B can't see this
}

export interface ApprovalData {
  postId: string;
  workflowTitle: string;
  steps: WorkflowStep[];
  locations: ApprovalLocation[];
  submittedBy: string;
  submittedAt: string;
  deadline?: string;
}

// ─── Current logged-in user ───────────────────────────────────────────────────

export const CURRENT_USER = {
  id: 'current-user',
  name: 'Haresh',
  userType: 'A' as 'A' | 'B', // A = full-access, B = partial
};

// ─── Approval Data per post ───────────────────────────────────────────────────

export const APPROVAL_DATA: Record<string, ApprovalData> = {

  // post-4: Awaiting approval — Step 1 complete, Step 2 in progress
  'post-4': {
    postId: 'post-4',
    workflowTitle: 'Manager review',
    submittedBy: 'Ana Perez',
    submittedAt: 'Mar 3, 2026 9:00 AM',
    deadline: 'Mar 6, 2026 11:59 PM',
    steps: [
      {
        stepNumber: 1,
        title: 'Step 1',
        status: 'complete',
        approvers: [
          { id: 'nolan', name: 'Nolan Botosh', isCurrentUser: false, responded: true, action: 'approved', respondedAt: 'Mar 3, 2026 11:00 AM' },
          { id: 'jaxson', name: 'Jaxson Septimus', isCurrentUser: false, responded: true, action: 'approved', respondedAt: 'Mar 3, 2026 11:30 AM' },
        ],
      },
      {
        stepNumber: 2,
        title: 'Step 2',
        status: 'current',
        approvers: [
          { id: 'current-user', name: 'Haresh', isCurrentUser: true, responded: false },
          { id: 'nolan2', name: 'Nolan Botosh', isCurrentUser: false, responded: false },
          { id: 'jaxson2', name: 'Jaxson Septimus', isCurrentUser: false, responded: false },
        ],
      },
    ],
    locations: [
      { id: 'loc-1', name: "Motto Mortgage Atlanta Downtown", city: 'Atlanta', status: 'pending', isCurrentUserScope: true },
      { id: 'loc-2', name: "Motto Mortgage Atlanta Midtown", city: 'Atlanta', status: 'pending', isCurrentUserScope: true },
      { id: 'loc-3', name: "Motto Mortgage Boston Commons", city: 'Boston', status: 'pending', isCurrentUserScope: true },
      { id: 'loc-4', name: "Motto Mortgage Chicago Loop", city: 'Chicago', status: 'pending', isCurrentUserScope: true },
      { id: 'loc-5', name: "Motto Mortgage Denver Tech Center", city: 'Denver', status: 'pending', isCurrentUserScope: true },
      { id: 'loc-6', name: "Motto Mortgage Houston Galleria", city: 'Houston', status: 'pending', isCurrentUserScope: true },
      { id: 'loc-7', name: "Motto Mortgage Miami Beach", city: 'Miami', status: 'pending', isCurrentUserScope: true },
      { id: 'loc-8', name: "Motto Mortgage New York Times Square", city: 'New York', status: 'pending', isCurrentUserScope: true },
    ],
  },

  // post-5: Partially approved — Step 1 complete, Step 2 partially actioned
  'post-5': {
    postId: 'post-5',
    workflowTitle: 'Manager review',
    submittedBy: 'Carlos Rivera',
    submittedAt: 'Mar 3, 2026 10:00 AM',
    deadline: 'Mar 6, 2026 11:59 PM',
    steps: [
      {
        stepNumber: 1,
        title: 'Step 1',
        status: 'complete',
        approvers: [
          { id: 'nolan', name: 'Nolan Botosh', isCurrentUser: false, responded: true, action: 'approved', respondedAt: 'Mar 3, 2026 2:00 PM' },
        ],
      },
      {
        stepNumber: 2,
        title: 'Step 2',
        status: 'current',
        approvers: [
          { id: 'current-user', name: 'Haresh', isCurrentUser: true, responded: false },
          { id: 'kim', name: 'Manager Kim', isCurrentUser: false, responded: true, action: 'approved', respondedAt: 'Mar 3, 2026 4:00 PM' },
        ],
      },
    ],
    locations: [
      { id: 'loc-a', name: "Motto Mortgage Denver Tech Center", city: 'Denver', status: 'approved', actionedBy: 'Manager Kim', actionedAt: 'Mar 3, 2026 4:00 PM', isCurrentUserScope: true },
      { id: 'loc-b', name: "Motto Mortgage Denver Airport", city: 'Denver', status: 'pending', isCurrentUserScope: true },
      { id: 'loc-c', name: "Motto Mortgage Denver Highlands", city: 'Denver', status: 'pending', isCurrentUserScope: true },
      { id: 'loc-d', name: "Motto Mortgage Denver Cherry Creek", city: 'Denver', status: 'rejected', rejectionReason: 'Image does not align with local market guidelines. Please use approved Denver regional assets.', actionedBy: 'Manager Kim', actionedAt: 'Mar 3, 2026 4:10 PM', isCurrentUserScope: true },
      { id: 'loc-e', name: "Motto Mortgage Denver Union Station", city: 'Denver', status: 'pending', isCurrentUserScope: true },
    ],
  },

  // post-9: Rejected from approval flow — Atlanta Midtown location rejected
  'post-9': {
    postId: 'post-9',
    workflowTitle: 'Manager review',
    submittedBy: 'Ana Perez',
    submittedAt: 'Mar 3, 2026 9:00 AM',
    steps: [
      {
        stepNumber: 1,
        title: 'Step 1',
        status: 'complete',
        approvers: [
          { id: 'nolan', name: 'Nolan Botosh', isCurrentUser: false, responded: true, action: 'approved', respondedAt: 'Mar 3, 2026 11:00 AM' },
        ],
      },
      {
        stepNumber: 2,
        title: 'Step 2',
        status: 'rejected',
        approvers: [
          { id: 'current-user', name: 'Haresh', isCurrentUser: true, responded: true, action: 'rejected', respondedAt: 'Mar 4, 2026 10:30 AM', rejectionReason: 'Image does not meet brand guidelines. Please use approved photography from the Motto Mortgage asset library.' },
        ],
      },
    ],
    locations: [
      { id: 'loc-p1', name: 'Motto Mortgage Atlanta Downtown', city: 'Atlanta', status: 'approved', actionedBy: 'Haresh', actionedAt: 'Mar 4, 2026 10:20 AM', isCurrentUserScope: true },
      { id: 'loc-p2', name: 'Motto Mortgage Atlanta Midtown', city: 'Atlanta', status: 'rejected', rejectionReason: 'Image does not meet brand guidelines. Please use approved photography from the Motto Mortgage asset library.', actionedBy: 'Haresh', actionedAt: 'Mar 4, 2026 10:30 AM', isCurrentUserScope: true },
      { id: 'loc-p3', name: 'Motto Mortgage Boston Commons', city: 'Boston', status: 'rejected', rejectionReason: 'Caption needs local market customization before approval.', actionedBy: 'Haresh', actionedAt: 'Mar 4, 2026 10:35 AM', isCurrentUserScope: true },
    ],
  },

  // post-3: Rejected — post-level rejection
  'post-3': {
    postId: 'post-3',
    workflowTitle: 'Brand Compliance review',
    submittedBy: 'Sarah Mitchell',
    submittedAt: 'Mar 2, 2026 11:00 AM',
    steps: [
      {
        stepNumber: 1,
        title: 'Step 1',
        status: 'rejected',
        approvers: [
          {
            id: 'compliance',
            name: 'Brand Compliance',
            isCurrentUser: false,
            responded: true,
            action: 'rejected',
            respondedAt: 'Mar 3, 2026 9:00 AM',
            rejectionReason: 'Image does not meet brand guidelines. Please use approved breakfast photography from the asset library.',
          },
        ],
      },
    ],
    locations: [
      { id: 'loc-r1', name: "Motto Mortgage Chicago Loop", city: 'Chicago', status: 'rejected', rejectionReason: 'Image does not meet brand guidelines.', actionedBy: 'Brand Compliance', actionedAt: 'Mar 3, 2026 9:00 AM', isCurrentUserScope: true },
      { id: 'loc-r2', name: "Motto Mortgage Chicago O'Hare", city: 'Chicago', status: 'rejected', rejectionReason: 'Image does not meet brand guidelines.', actionedBy: 'Brand Compliance', actionedAt: 'Mar 3, 2026 9:00 AM', isCurrentUserScope: true },
      { id: 'loc-r3', name: "Motto Mortgage Chicago Wicker Park", city: 'Chicago', status: 'rejected', rejectionReason: 'Image does not meet brand guidelines.', actionedBy: 'Brand Compliance', actionedAt: 'Mar 3, 2026 9:00 AM', isCurrentUserScope: true },
    ],
  },
};
