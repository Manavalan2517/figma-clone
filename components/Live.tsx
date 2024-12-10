import { useMyPresence, useOthers } from '@liveblocks/react';
import LiveCursors from './cursor/LiveCursors';
import { useCallback } from 'react';

const Live = () => {
  const others = useOthers();
  const [{ cursor }, updateMyPresence] = useMyPresence();
  const handlPointerMove = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y
    updateMyPresence({ cursor: { x, y } })
  }, [])

  const handlPointerLeave = useCallback((event: React.PointerEvent) => {
    event.preventDefault();
    updateMyPresence({ cursor: null, message: null })
  }, [])

  const handlPointerDown = useCallback((event: React.PointerEvent) => {
    const x = event.clientX - event.currentTarget.getBoundingClientRect().x
    const y = event.clientY - event.currentTarget.getBoundingClientRect().y
    updateMyPresence({ cursor: { x, y } })
  }, [])

  return (
    <div
      onPointerMove={handlPointerMove}
      onPointerLeave={handlPointerLeave}
      onPointerDown={handlPointerDown}
      className="h-[100vh] w-full flex justify-center items-center border-2 border-green-500"
    >
      <h1 className="text-2xl text-white">
        Hello
      </h1>
      <LiveCursors others={others} />
    </div>
  );
}

export default Live