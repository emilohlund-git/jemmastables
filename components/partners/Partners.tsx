import React from 'react';
import { useSelector } from 'react-redux';
import { Partner, usePartnersQuery } from '../../generated/graphql';
import { RootState } from '../../redux/reducers';
import Spinner from '../Spinner';
import AddPartnerBanner from './AddPartnerBanner';
import PartnerBanner from './PartnerBanner';

interface Props {

}

const Partners = (props: Props) => {
    const { data, loading } = usePartnersQuery();
    const admin: boolean = useSelector((state: RootState) => state.admin);

    return (
        <div className="bg-white">
            {!loading && data! ? data?.partners.map((partner, index) => {
                return (
                    <PartnerBanner key={index} partner={partner as Partner} />
                )
            }) : <Spinner />}
            {admin &&
                <AddPartnerBanner />
            }
        </div>
    )
}

export default Partners
