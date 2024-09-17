import { cookies } from 'next/headers';

export default function TestPage() {
  cookies();
  return (
    <div>
      <h1>Test Page</h1>
    </div>
  );
}
