import React from 'react'
import {Link} from 'gatsby'
import Title from '../Globals/Title'

export default function Info() {
    return (
        <section className="py-5">
            <div className="container">
            <Title title="Our Story"></Title>
                <div className="row">
                    <div className="col-10 col-sm-8 mx-auto text-center">
                        <p className="lead text-muted mb-5">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente reiciendis facere in rerum, ullam quae labore. Ratione est repellendus delectus quibusdam commodi pariatur cumque praesentium dolore earum consectetur accusamus dignissimos ex quae, ea molestiae in unde soluta placeat voluptate? Cum alias commodi labore illo dolores officiis dignissimos molestias et omnis.
                        </p>

                        <Link to="/about/" >
                            <button className="btn text-uppercase btn-yellow">about page</button>
                        </Link>

                    </div>
                </div>
            </div>
        </section>
    )
}
