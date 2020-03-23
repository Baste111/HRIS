module.exports = `
    create table if not exists profile
    (
        id                     mediumint auto_increment primary key not null,
        benefit_id             mediumint                            not null,
        contact_id             mediumint                            not null,
        address_id             mediumint                            not null,
        family_id              mediumint                            not null,
        government_issue_id_id mediumint                            not null,
        photo_id               mediumint                            not null,
        first_name             varchar(150)                         not null,
        middle_name            varchar(150)                         not null,
        last_name              varchar(150)                         not null,
        extension              varchar(50)                          not null,
        birth_date             date                                 not null,
        birth_place            varchar(150)                         not null,
        sex                    varchar(50)                          not null,
        civil_status           varchar(50)                          not null,
        blood_type             varchar(50),
        height                 float,
        weight                 float,
        created_at             timestamp default now(),
        is_deleted             boolean   default false,
        deleted_at             timestamp,
        foreign key (benefit_id) references benefit (id),
        foreign key (contact_id) references contact (id),
        foreign key (address_id) references address (id),
        foreign key (family_id) references family (id),
        foreign key (government_issue_id_id) references government_issue_id (id),
        foreign key (photo_id) references photo (id)
    );
`;