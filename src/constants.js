import {
    ArrowLeft, Home, Menu, X, Check,
    Trash2, Edit2, Plus, Search, Filter,
    User, Settings, Bell, LogOut, Eye,
    Share2, Download, Upload, RefreshCw, MoreVertical
} from 'lucide-react';

export const MOODS = [
    { id: 'neutral', label: 'Neutral / System' },
    { id: 'playful', label: 'Playful / Pop' },
    { id: 'secure', label: 'Secure / Trust' },
    { id: 'urgent', label: 'Urgent / High-Vis' }
];

export const ICON_GRIDS = [
    {
        title: 'Navigation (~400Hz Base)',
        // Mid-pitch = Blue
        colorClasses: {
            bg: 'bg-blue-500',
            textActive: 'text-blue-600',
            textHover: 'group-hover:text-blue-500',
            border: 'hover:border-blue-300',
            bgHover: 'hover:bg-blue-50',
            bgActive: 'active:bg-blue-100',
            ring: 'ring-blue-500',
            shadow: 'shadow-blue-200'
        },
        icons: [
            { id: 'back', label: 'Back', Icon: ArrowLeft },
            { id: 'home', label: 'Home', Icon: Home },
            { id: 'menu', label: 'Menu', Icon: Menu },
            { id: 'reject', label: 'Reject', Icon: X },
            { id: 'correct', label: 'Correct', Icon: Check },
        ]
    },
    {
        title: 'Data Actions (~300Hz Base)',
        // Lower pitch = Red/Rose
        colorClasses: {
            bg: 'bg-rose-500',
            textActive: 'text-rose-600',
            textHover: 'group-hover:text-rose-500',
            border: 'hover:border-rose-300',
            bgHover: 'hover:bg-rose-50',
            bgActive: 'active:bg-rose-100',
            ring: 'ring-rose-500',
            shadow: 'shadow-rose-200'
        },
        icons: [
            { id: 'delete', label: 'Delete', Icon: Trash2 },
            { id: 'edit', label: 'Edit', Icon: Edit2 },
            { id: 'create', label: 'Create', Icon: Plus },
            { id: 'search', label: 'Search', Icon: Search },
            { id: 'filter', label: 'Filter', Icon: Filter },
        ]
    },
    {
        title: 'User & System (~500Hz Base)',
        // High-mid pitch = Violet/Purple
        colorClasses: {
            bg: 'bg-violet-500',
            textActive: 'text-violet-600',
            textHover: 'group-hover:text-violet-500',
            border: 'hover:border-violet-300',
            bgHover: 'hover:bg-violet-50',
            bgActive: 'active:bg-violet-100',
            ring: 'ring-violet-500',
            shadow: 'shadow-violet-200'
        },
        icons: [
            { id: 'profile', label: 'Profile', Icon: User },
            { id: 'settings', label: 'Settings', Icon: Settings },
            { id: 'notify', label: 'Notify', Icon: Bell },
            { id: 'logout', label: 'Logout', Icon: LogOut },
            { id: 'view', label: 'View', Icon: Eye },
        ]
    },
    {
        title: 'Utilities (~600Hz Base)',
        // High pitch = Emerald/Green
        colorClasses: {
            bg: 'bg-emerald-500',
            textActive: 'text-emerald-600',
            textHover: 'group-hover:text-emerald-500',
            border: 'hover:border-emerald-300',
            bgHover: 'hover:bg-emerald-50',
            bgActive: 'active:bg-emerald-100',
            ring: 'ring-emerald-500',
            shadow: 'shadow-emerald-200'
        },
        icons: [
            { id: 'share', label: 'Share', Icon: Share2 },
            { id: 'download', label: 'Download', Icon: Download },
            { id: 'upload', label: 'Upload', Icon: Upload },
            { id: 'refresh', label: 'Refresh', Icon: RefreshCw },
            { id: 'options', label: 'Options', Icon: MoreVertical },
        ]
    }
];

// Each icon gets a very distinct base frequency.
export const ACTION_FREQUENCIES = {
    // Navigation (~400Hz Range)
    back: 380,
    home: 400,
    menu: 420,
    reject: 200,   // Exception: Negative
    correct: 460,

    // Data Actions (~300Hz Range)
    delete: 220,   // Exception: Negative
    edit: 300,
    create: 680,   // Exception: Very positive
    search: 340,
    filter: 360,

    // User & System (~500Hz Range)
    profile: 480,
    settings: 500,
    notify: 520,  // Higher pitch to catch attention
    logout: 240,  // Exception: Negative
    view: 560,

    // Utilities (~600Hz Range)
    share: 580,
    download: 260, // Exception: Downward action 
    upload: 620,   // Exception: Upward action
    refresh: 640,
    options: 660,
};
