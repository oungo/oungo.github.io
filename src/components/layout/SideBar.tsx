import { memo, useEffect, useRef } from 'react';

interface Props {
  onClose: () => void;
}

const SideBar = ({ onClose }: Props) => {
  const asideRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!asideRef.current) {
      return;
    }

    const handleClick = (e: MouseEvent) => {
      if (!asideRef.current?.contains(e.target as HTMLElement)) {
        const animation = asideRef.current?.animate(
          [{ transform: 'translateX(0)' }, { transform: 'translateX(-100%)' }],
          {
            duration: 200,
            fill: 'forwards',
            easing: 'ease',
          }
        );
        animation?.finished.then(onClose);
      }
    };

    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  }, [onClose]);

  return (
    <div className="fixed top-0 bottom-0 left-0 right-0 z-20 bg-black bg-opacity-30">
      <aside ref={asideRef} className="w-3/4 h-full p-5 bg-white sm:w-1/4 animate-slideRight">
        <div className="text-center">
          <a href="https://github.com/oungo" target="_blank" rel="noopenner">
            <i className="text-2xl fa-brands fa-github" />
          </a>
        </div>
      </aside>
    </div>
  );
};

export default memo(SideBar);
