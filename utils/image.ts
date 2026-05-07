export const formatImageUrl = (url: string | undefined | null): string => {
    if (!url) return '';
    let processed = url.trim();
    
    // Bypass for youtube
    if (processed.includes('youtube.com') || processed.includes('youtu.be')) {
        return processed;
    }
    
    // Check if it's already an lh3 link
    if (processed.includes('lh3.googleusercontent.com')) {
        return processed;
    }
    
    // Extract file ID from typical Drive URLs
    const fileIdMatch = processed.match(/\/file\/d\/([a-zA-Z0-9_-]+)/) || processed.match(/id=([a-zA-Z0-9_-]+)/);
    
    if (processed.includes('drive.google.com') && fileIdMatch && fileIdMatch[1]) {
        return `https://lh3.googleusercontent.com/d/${fileIdMatch[1]}`;
    }
    
    return processed;
};
