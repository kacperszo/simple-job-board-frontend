import React, {useEffect, useState} from "react";

export default function AdvertisementEditor(props) {
    const [title, setTitle] = useState(props.title)
    const [content, setContent] = useState(props.content)
    const [expirationDate, setExpirationDate] = useState(props.expirationDate)
    const [hidden, setHidden] = useState(props.hidden)
    useEffect(() => {
        setTitle(props.title)
        setContent(props.content)
        setExpirationDate(props.expirationDate)
        setHidden(props.hidden)
    }, [props.id])
    return (
        <form>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Title</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input className="input" onChange={(e) => setTitle(e.target.value)} value={title}
                                   type="text" placeholder="Title"/>
                        </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Content</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <textarea className="textarea" onChange={(e) => setContent(e.target.value)} value={content}
                                      placeholder="Your job advertisment"></textarea>
                        </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Expiration date</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input type="datetime-local"
                                   className="input"
                                   value={expirationDate}
                                   onChange={e => setExpirationDate(e.target.value)}
                            />
                        </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label is-normal">
                    <label className="label">Hidden</label>
                </div>
                <div className="field-body">
                    <div className="field">
                        <p className="control">
                            <input type="checkbox"
                                   className="checkbox"
                                   onChange={e => setHidden(e.target.checked)}
                            />
                        </p>
                    </div>
                </div>
            </div>
            <div className="field is-horizontal">
                <div className="field-label">

                </div>
                <div className="field-body">
                    <div className="field">
                        <div className="control">
                            <button type="submit" onClick={e => {
                                e.preventDefault();
                                props.onSubmit(title, content, expirationDate, hidden)
                            }} className="button is-primary">
                                Save
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </form>
    )
}