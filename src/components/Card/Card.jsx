export default function Card({
  title,
  description,
  tags = [],
  status = "draft",
}) {
  return (
    <div className="border rounded-lg p-4 shadow-sm">
      <div className="flex justify-between items-center mb-2">
        <h2 className="text-xl font-bold">{title}</h2>
        <span
          className={`px-2 py-1 rounded-full text-sm ${
            status === "published"
              ? "bg-green-100 text-green-800"
              : status === "review"
              ? "bg-gray-100 text-gray-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {status}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
