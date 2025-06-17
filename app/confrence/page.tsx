'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function JoinPage() {
  const [room, setRoom] = useState('');
  const [username, setUsername] = useState('');
  const router = useRouter();

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault();
    if (room.trim() && username.trim()) {
      router.push(`/room?room=${encodeURIComponent(room)}&username=${encodeURIComponent(username)}`);
    } else {
      alert('Please enter both Room Name and Username.');
    }
  };

  return (
    <div style={{ display: 'flex', height: '100dvh', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <h1>Join a Meeting</h1>
      <form onSubmit={handleJoin} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
        <input
          type="text"
          placeholder="Room Name"
          value={room}
          onChange={(e) => setRoom(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <input
          type="text"
          placeholder="Your Name"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{ padding: '10px', fontSize: '16px' }}
        />
        <button type="submit" style={{ padding: '10px', fontSize: '18px', cursor: 'pointer' }}>
          Join Room
        </button>
      </form>
    </div>
  );
}
