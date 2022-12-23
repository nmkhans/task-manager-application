import React from 'react';

const StatusModal = ({ id }) => {

    return (
        <div>
            <input type="checkbox" id="status-modal" className="modal-toggle" />
            <label htmlFor="status-modal" className="modal cursor-pointer">
                <label className="modal-box relative" htmlFor="">
                    <h3 className="text-xl text-slate-700 text-center font-bold">Update Status</h3>
                    <div className="text-center">
                        <p className="py-4">{id}</p>
                    </div>
                </label>
            </label>
        </div>
    );
};

export default StatusModal;