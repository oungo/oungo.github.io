import Link from 'next/link';

import Date from '@components/Date';

interface Props {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
}

const Preview = ({ title, date, excerpt, slug }: Props) => {
  return (
    <Link
      href={`/posts/${slug}`}
      className="flex flex-col gap-2 p-4 duration-200 transform border border-gray-300 rounded-md hover:scale-101"
    >
      <h2 className="text-xl font-semibold text-teal-600">{title}</h2>
      <p className="text-gray-700">{excerpt}</p>
      <div className="text-gray-700">
        <Date dateString={date} />
      </div>
    </Link>
  );
};

export default Preview;