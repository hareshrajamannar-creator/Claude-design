import { useState } from 'react';
import svgPaths from "../../imports/svg-t5bm6bd5iw";
import { imgArrowLeftAlt } from "../../imports/svg-hu4ug";
import {
  Sparkles,
  Edit,
  Clock,
  Image as ImageIcon,
  MapPin,
  CheckCircle,
  XCircle,
  RefreshCw,
  Users
} from 'lucide-react';
import { POST_ACTIVITIES, Activity } from '../data/postData';

// Activity type is imported from postData.ts

const mockActivities: Activity[] = [
  {
    id: '1',
    type: 'caption_edited',
    user: { name: 'Sarah Mitchell', avatar: 'gradient' },
    timestamp: 'just now',
    description: 'edited the caption and hashtags',
    details: {
      before: 'Try our new Spicy Chicken Sandwich! Available for a limited time. #McDonalds #NewMenu',
      after: 'Introducing our NEW Spicy Chicken Sandwich! 🔥 Crispy, juicy, and packed with flavor. Limited time only! #McDonalds #SpicyChicken #NewMenu #LimitedTime'
    }
  },
  {
    id: '2',
    type: 'image_changed',
    user: { name: 'David Rodriguez', avatar: 'gradient' },
    timestamp: '5mins',
    description: 'updated the post image',
    details: {
      beforeImage: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?w=400&h=300&fit=crop',
      afterImage: 'https://images.unsplash.com/photo-1607013251379-e6eecfffe234?w=400&h=300&fit=crop'
    }
  },
  {
    id: '3',
    type: 'multi_location_edit',
    user: { name: 'Marketing Team', avatar: 'gradient' },
    timestamp: '15mins',
    description: 'applied Happy Meal promotion rules to Facebook pages',
    details: {
      locations: ['Facebook'],
      count: 3
    }
  },
  {
    id: '4',
    type: 'scheduled',
    user: { name: 'Jessica Martinez', avatar: 'gradient' },
    timestamp: 'Mar 19, 2026 11:42 AM',
    description: 'scheduled this post for 10 locations on Mar 20, 9:00 AM',
    details: {
      count: 10,
      locations: ['Atlanta Downtown', 'Boston Commons', 'Los Angeles Westwood', 'Chicago Loop', 'Denver Tech Center', 'Houston Galleria', 'Miami Beach', 'New York Times Square', 'Seattle Pike Place', 'Phoenix Scottsdale']
    }
  },
  {
    id: '5',
    type: 'partial_approval',
    user: { name: 'Regional Manager', avatar: 'gradient' },
    timestamp: 'Mar 19, 2026 10:15 AM',
    description: 'approved 5 of 10 locations',
    details: {
      locations: ['Atlanta Downtown', 'Boston Commons', 'Los Angeles Westwood', 'Chicago Loop', 'Denver Tech Center']
    }
  },
  {
    id: '6',
    type: 'location_removed',
    user: { name: 'Michael Chen', avatar: 'gradient' },
    timestamp: 'Mar 19, 2026 9:30 AM',
    description: 'removed location',
    details: {
      locations: ['Phoenix Scottsdale']
    }
  },
  {
    id: '7',
    type: 'caption_edited',
    user: { name: 'Sarah Mitchell', avatar: 'gradient' },
    timestamp: 'Mar 18, 2026 4:20 PM',
    description: 'edited the post caption',
    details: {
      before: "McDonald's meals in every celebration that brings smiles, happiness, and togetherness. #FamilyTime #McDonalds",
      after: "McDonald's meals make every celebration special with smiles, happiness, and unforgettable moments together. #FamilyTime #McDonalds #Celebration"
    }
  },
  {
    id: '8',
    type: 'media_updated',
    user: { name: 'David Rodriguez', avatar: 'gradient' },
    timestamp: 'Mar 18, 2026 3:15 PM',
    description: 'updated the post image for 8 locations',
    details: {
      count: 8
    }
  },
  {
    id: '9',
    type: 'location_added',
    user: { name: 'Michael Chen', avatar: 'gradient' },
    timestamp: 'Mar 18, 2026 1:30 PM',
    description: 'added 3 new locations',
    details: {
      locations: ['Miami Beach', 'Seattle Pike Place', 'Phoenix Scottsdale']
    }
  },
  {
    id: '10',
    type: 'approved',
    user: { name: 'Regional Manager', avatar: 'gradient' },
    timestamp: 'Mar 18, 2026 12:45 PM',
    description: 'approved the remaining 5 locations',
    details: {
      locations: ['Houston Galleria', 'Miami Beach', 'New York Times Square', 'Seattle Pike Place', 'Phoenix Scottsdale']
    }
  },
  {
    id: '11',
    type: 'rejected',
    user: { name: 'Brand Compliance', avatar: 'gradient' },
    timestamp: 'Mar 18, 2026 11:20 AM',
    description: 'rejected Boston Commons location',
    details: {
      locations: ['Boston Commons'],
      rejectionReason: 'Image does not meet brand guidelines - logo placement incorrect'
    }
  },
  {
    id: '12',
    type: 'caption_edited',
    user: { name: 'Sarah Mitchell', avatar: 'gradient' },
    timestamp: 'Mar 18, 2026 10:00 AM',
    description: 'edited the post caption',
    details: {
      before: 'Start your morning right with our breakfast menu!',
      after: 'Start your morning right with our delicious breakfast menu! Fresh ingredients, hot coffee, and your favorites. ☀️ #BreakfastTime'
    }
  },
  {
    id: '13',
    type: 'created',
    user: { name: 'Sarah Mitchell', avatar: 'gradient' },
    timestamp: 'Mar 18, 2026 9:00 AM',
    description: 'created this post'
  }
];

export function ActivityFeed({ postId }: { postId?: string }) {
  const [expandedItems, setExpandedItems] = useState<Set<string>>(new Set());
  const activities: Activity[] = postId && POST_ACTIVITIES[postId]
    ? POST_ACTIVITIES[postId]
    : mockActivities;

  const toggleItem = (id: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(id)) {
      newExpanded.delete(id);
    } else {
      newExpanded.add(id);
    }
    setExpandedItems(newExpanded);
  };

  const getActivityIcon = (type: Activity['type']) => {
    const iconProps = { size: 16, strokeWidth: 2 };
    switch (type) {
      case 'created':
        return <Sparkles {...iconProps} />;
      case 'edited':
      case 'caption_edited':
        return <Edit {...iconProps} />;
      case 'scheduled':
      case 'rescheduled':
        return <Clock {...iconProps} />;
      case 'media_updated':
      case 'image_changed':
        return <ImageIcon {...iconProps} />;
      case 'location_added':
      case 'location_removed':
        return <MapPin {...iconProps} />;
      case 'approved':
      case 'partial_approval':
        return <CheckCircle {...iconProps} />;
      case 'rejected':
        return <XCircle {...iconProps} />;
      case 'multi_location_edit':
      case 'bulk_edit':
        return <RefreshCw {...iconProps} />;
      default:
        return <Edit {...iconProps} />;
    }
  };

  const getActivityColor = (type: Activity['type']) => {
    switch (type) {
      case 'approved':
      case 'partial_approval':
        return '#377e2c';
      case 'rejected':
        return '#de1b0c';
      case 'scheduled':
      case 'rescheduled':
        return '#1976d2';
      case 'multi_location_edit':
        return '#c69204';
      default:
        return '#555';
    }
  };

  const groupedActivities = activities.reduce((acc, activity) => {
    const date = activity.timestamp.includes('Mar') 
      ? activity.timestamp.split(',')[0] + ', 2026'
      : 'TODAY, 19 MAR 2026';
    
    if (!acc[date]) {
      acc[date] = [];
    }
    acc[date].push(activity);
    return acc;
  }, {} as Record<string, Activity[]>);

  return (
    <div className="relative rounded-[8px] shrink-0 w-full">
      <div className="content-stretch flex flex-col gap-[8px] items-start justify-center overflow-clip pb-[8px] relative rounded-[inherit] w-full">

        {/* Activity List */}
        <div className="relative rounded-[4px] shrink-0 w-full">
          <div className="flex flex-col justify-center overflow-clip rounded-[inherit] size-full">
            <div className="content-stretch flex flex-col items-start justify-center px-[16px] relative w-full">
              {Object.entries(groupedActivities).map(([date, activities], groupIndex) => (
                <div key={date} className="w-full">
                  {/* Date Header */}
                  <div className="py-[12px]">
                    <p className="font-['Roboto:Regular',sans-serif] font-normal leading-[18px] relative text-[#555] text-[12px] tracking-[-0.24px] uppercase" style={{ fontVariationSettings: "'wdth' 100" }}>
                      {date}
                    </p>
                  </div>

                  {/* Activities for this date */}
                  {activities.map((activity, index) => (
                    <div 
                      key={activity.id} 
                      className={`bg-white relative shrink-0 w-full ${index < activities.length - 1 || groupIndex < Object.entries(groupedActivities).length - 1 ? 'border-b border-[#eaeaea]' : ''}`}
                    >
                      <div className="flex flex-row items-center size-full">
                        <div className="content-stretch flex flex-col gap-[8px] items-start px-[4px] py-[12px] relative w-full">
                          {/* Activity Header */}
                          <div className="content-stretch flex gap-[8px] items-start relative shrink-0 w-full">
                            <div 
                              className="rounded-[9999px] shrink-0 size-[32px] flex items-center justify-center" 
                              style={{ 
                                backgroundColor: "#f0f0f0",
                                color: getActivityColor(activity.type)
                              }}
                            >
                              {getActivityIcon(activity.type)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="content-stretch flex flex-col gap-px items-start relative shrink-0">
                                <p className="leading-[18px] relative shrink-0 text-[#555] text-[12px] tracking-[-0.24px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  {activity.timestamp}
                                </p>
                                <p className="leading-[20px] relative text-[#212121] text-[14px] tracking-[-0.28px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                  <span className="font-['Roboto:Medium',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    {activity.user.name}
                                  </span>
                                  {' '}
                                  <span className="font-['Roboto:Regular',sans-serif]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                    {activity.description}
                                  </span>
                                </p>
                              </div>

                              {/* Activity Details */}
                              {activity.details && (
                                <div className="mt-[8px]">
                                  {/* Caption Edit with Hashtags */}
                                  {(activity.type === 'caption_edited' || activity.type === 'bulk_edit') && activity.details.before && activity.details.after && (
                                    <div className="bg-[#fafafa] rounded-[4px] p-[12px] space-y-[8px]">
                                      <div>
                                        <p className="font-['Roboto:Medium',sans-serif] text-[11px] text-[#555] uppercase mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                          Caption
                                        </p>
                                        <div className="flex items-start gap-[8px]">
                                          <div className="flex-1 bg-white border border-[#eaeaea] rounded-[4px] px-[8px] py-[6px]">
                                            <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#555] line-through" style={{ fontVariationSettings: "'wdth' 100" }}>
                                              {activity.details.before}
                                            </p>
                                          </div>
                                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[4px]">
                                            <path d="M5 8H11M11 8L8 5M11 8L8 11" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                          </svg>
                                          <div className="flex-1 bg-white border border-[#1976d2] rounded-[4px] px-[8px] py-[6px]">
                                            <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#212121]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                              {activity.details.after}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {/* Rescheduled - From/To dates */}
                                  {activity.type === 'rescheduled' && activity.details?.before && activity.details?.after && (
                                    <div className="bg-[#fafafa] rounded-[4px] p-[12px] space-y-[8px]">
                                      <p className="font-['Roboto:Medium',sans-serif] text-[11px] text-[#555] uppercase mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                        Schedule
                                      </p>
                                      <div className="flex items-center gap-[8px]">
                                        <div className="flex-1 bg-white border border-[#eaeaea] rounded-[4px] px-[8px] py-[6px]">
                                          <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#555] line-through" style={{ fontVariationSettings: "'wdth' 100" }}>
                                            {activity.details.before}
                                          </p>
                                        </div>
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0">
                                          <path d="M5 8H11M11 8L8 5M11 8L8 11" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                        <div className="flex-1 bg-white border border-[#1976d2] rounded-[4px] px-[8px] py-[6px]">
                                          <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#212121]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                            {activity.details.after}
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {/* Image Change - Before/After */}
                                  {activity.type === 'image_changed' && activity.details.beforeImage && activity.details.afterImage && (
                                    <div className="bg-[#fafafa] rounded-[4px] p-[12px] space-y-[8px]">
                                      <div>
                                        <p className="font-['Roboto:Medium',sans-serif] text-[11px] text-[#555] uppercase mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                          Image
                                        </p>
                                        <div className="flex items-start gap-[8px]">
                                          <div className="flex-1">
                                            <div className="bg-white border border-[#eaeaea] rounded-[4px] p-[4px]">
                                              <img 
                                                src={activity.details.beforeImage} 
                                                alt="Before" 
                                                className="w-full h-[120px] object-cover rounded-[2px]"
                                              />
                                              <p className="font-['Roboto:Regular',sans-serif] text-[10px] text-[#555] text-center mt-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                                Before
                                              </p>
                                            </div>
                                          </div>
                                          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="shrink-0 mt-[50px]">
                                            <path d="M5 8H11M11 8L8 5M11 8L8 11" stroke="#555" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                          </svg>
                                          <div className="flex-1">
                                            <div className="bg-white border-2 border-[#1976d2] rounded-[4px] p-[4px]">
                                              <img 
                                                src={activity.details.afterImage} 
                                                alt="After" 
                                                className="w-full h-[120px] object-cover rounded-[2px]"
                                              />
                                              <p className="font-['Roboto:Regular',sans-serif] text-[10px] text-[#1976d2] text-center mt-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                                After
                                              </p>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {/* Multi-location/Bulk Edit */}
                                  {activity.type === 'multi_location_edit' && activity.details.locations && (
                                    <div className="bg-[#fafafa] rounded-[4px] p-[12px] space-y-[8px]">
                                      <div>
                                        <p className="font-['Roboto:Medium',sans-serif] text-[11px] text-[#555] uppercase mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                          Platform
                                        </p>
                                        <div className="flex items-center gap-[8px]">
                                          <div className="bg-white border border-[#eaeaea] rounded-[4px] px-[8px] py-[4px]">
                                            <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#212121]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                              {activity.details.locations[0]}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  )}

                                  {/* Locations List */}
                                  {activity.details.locations && activity.details.locations.length > 0 && 
                                    (activity.type === 'scheduled' || activity.type === 'partial_approval' || 
                                     activity.type === 'approved' || activity.type === 'location_added') && (
                                    <div className="mt-[8px]">
                                      <button
                                        onClick={() => toggleItem(activity.id)}
                                        className="flex items-center gap-[4px] text-[#1976d2] hover:underline"
                                      >
                                        <p className="font-['Roboto:Regular',sans-serif] text-[12px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                          {expandedItems.has(activity.id) ? 'Hide' : 'View'} {activity.details.locations.length} location{activity.details.locations.length > 1 ? 's' : ''}
                                        </p>
                                        <svg 
                                          width="12" 
                                          height="12" 
                                          viewBox="0 0 12 12" 
                                          fill="none"
                                          style={{ 
                                            transform: expandedItems.has(activity.id) ? 'rotate(180deg)' : 'none',
                                            transition: 'transform 0.2s'
                                          }}
                                        >
                                          <path d="M9 4.5L6 7.5L3 4.5" stroke="#1976d2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                        </svg>
                                      </button>
                                      
                                      {expandedItems.has(activity.id) && (
                                        <div className="mt-[8px] bg-[#fafafa] rounded-[4px] p-[12px] space-y-[4px]">
                                          {activity.details.locations.map((location, idx) => (
                                            <div key={idx} className="flex items-center gap-[8px]">
                                              <div className="rounded-[9999px] shrink-0 size-[24px]" style={{ backgroundImage: "linear-gradient(119.094deg, rgb(195, 199, 245) 27.105%, rgb(234, 216, 249) 135.92%)" }} />
                                              <p className="font-['Roboto:Regular',sans-serif] text-[13px] text-[#212121]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                                McDonald's {location}
                                              </p>
                                            </div>
                                          ))}
                                        </div>
                                      )}
                                    </div>
                                  )}

                                  {/* Media Update Badge */}
                                  {activity.type === 'media_updated' && activity.details.count && (
                                    <div className="mt-[8px]">
                                      <div className="bg-[#ecf5fd] inline-flex items-center gap-[4px] px-[8px] py-[4px] rounded-[4px]">
                                        <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#1976d2]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                          Updated for {activity.details.count} locations
                                        </p>
                                      </div>
                                    </div>
                                  )}

                                  {/* Location Removed */}
                                  {activity.type === 'location_removed' && activity.details.locations && (
                                    <div className="mt-[8px]">
                                      <div className="bg-[#fef6f5] inline-flex items-center gap-[4px] px-[8px] py-[4px] rounded-[4px]">
                                        <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#de1b0c]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                          {activity.details.locations[0]}
                                        </p>
                                      </div>
                                    </div>
                                  )}

                                  {/* Rejected with Reason */}
                                  {activity.type === 'rejected' && (activity.details.locations || activity.details.rejectionReason) && (
                                    <div className="mt-[8px] space-y-[8px]">
                                      {activity.details.locations && (
                                        <div className="bg-[#fef6f5] inline-flex items-center gap-[4px] px-[8px] py-[4px] rounded-[4px]">
                                          <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#de1b0c]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                            Rejected: {activity.details.locations[0]}
                                          </p>
                                        </div>
                                      )}
                                      {activity.details.rejectionReason && (
                                        <div className="bg-[#fafafa] rounded-[4px] p-[12px]">
                                          <p className="font-['Roboto:Medium',sans-serif] text-[11px] text-[#555] uppercase mb-[4px]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                            Reason
                                          </p>
                                          <p className="font-['Roboto:Regular',sans-serif] text-[12px] text-[#de1b0c]" style={{ fontVariationSettings: "'wdth' 100" }}>
                                            {activity.details.rejectionReason}
                                          </p>
                                        </div>
                                      )}
                                    </div>
                                  )}
                                </div>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border border-[#eaeaea] border-solid inset-[-0.5px] pointer-events-none rounded-[8.5px]" />
    </div>
  );
}