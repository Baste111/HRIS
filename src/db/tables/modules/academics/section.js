module.exports = `
    create table if not exists section
    (
        id          mediumint auto_increment primary key not null,
        college_id  mediumint                            not null,
        course_id   mediumint                            not null,
        code        varchar(150)                         not null,
        name        varchar(150)                         not null,
        description text,
        year_level  smallint                             not null,
        created_at  timestamp default now(),
        is_deleted  boolean   default false,
        deleted_at  timestamp,
        foreign key (college_id) references college (id),
        foreign key (course_id) references course (id)
    );
`;