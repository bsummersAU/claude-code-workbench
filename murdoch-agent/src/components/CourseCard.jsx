export default function CourseCard({ course }) {
  return (
    <div className="course-card group" style={{ minWidth: 0 }}>
      {/* Colour bar */}
      <div style={{ height: 5, background: course.color || '#C4122F' }} />

      <div className="p-4">
        {/* Faculty */}
        <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: course.color || '#C4122F' }}>
          {course.faculty}
        </p>

        {/* Name */}
        <h3 className="font-bold text-base text-gray-900 leading-snug mb-2 group-hover:text-murdoch-red transition-colors">
          {course.name}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-500 leading-relaxed mb-3">
          {course.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mb-3">
          {course.tags.map(tag => (
            <span
              key={tag}
              className="px-2 py-0.5 rounded-md text-xs font-medium"
              style={{ background: `${course.color}15`, color: course.color }}
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Meta row */}
        <div className="flex items-center gap-4 text-xs text-gray-400 border-t border-gray-50 pt-3">
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            {course.duration}
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
            </svg>
            {course.delivery}
          </span>
          <span className="flex items-center gap-1 ml-auto font-semibold text-gray-500">
            ATAR {course.atar}
          </span>
        </div>
      </div>

      {/* Footer link */}
      <div
        className="px-4 py-2.5 flex items-center justify-between text-xs font-semibold border-t border-gray-50"
        style={{ color: course.color || '#C4122F' }}
      >
        <span>View course details</span>
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
        </svg>
      </div>
    </div>
  );
}
