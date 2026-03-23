import { PostDetailsDrawerContent } from "./PostDetailsDrawerContent";

interface PostDetailsDrawerProps {
  postId: string | null;
  onClose: () => void;
}

export function PostDetailsDrawer({ postId, onClose }: PostDetailsDrawerProps) {
  if (!postId) return null;

  return (
    <div className="absolute inset-0 bg-black/30 z-20" onClick={onClose}>
      <div 
        className="absolute bg-white h-full overflow-auto right-0 top-0 w-[650px]"
        onClick={(e) => e.stopPropagation()}
      >
        <PostDetailsDrawerContent postId={postId} onClose={onClose} />
      </div>
    </div>
  );
}