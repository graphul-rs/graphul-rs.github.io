import React from 'react';
import BrowserOnly from '@docusaurus/BrowserOnly';

export const HeaderBadgesWidget = ({ commaDelimitedContributors, lastVerifiedDateString, lastVerifiedVersionString }) => {
	let githubUsernames = {
		Sam: "SamuelBonilla",
		Phosphorus: "Phosphorus-M"
	}

	let buildAuthorBadge = function (authorNickname) {
		return (
			<a className="header-badge" href={`https://github.com/${githubUsernames[authorNickname]}`}>
				<span className="badge-avatar" style={{ backgroundImage: "url('https://avatars.githubusercontent.com/" + githubUsernames[authorNickname] + "')" }}></span>
				<span className="badge-label">{authorNickname}</span>
			</a>
		)
	}

	let buildLastVerifiedBadge = function (dateString, versionString) {
		if (dateString != null) {
			return (
				<a className="header-badge">
					<span className="badge-avatar emoji-avatar">✔️</span>
					<span className="badge-label">Last verified on <strong>{dateString}</strong> {versionString && <>using Graphul {versionString}</>} </span>
				</a>
			)
		}
	}

	return (
		<BrowserOnly>
			{() =>
				<div className="header-badges">
					{(commaDelimitedContributors != null ? commaDelimitedContributors.split(',').map(buildAuthorBadge) : null)}
					{buildLastVerifiedBadge(lastVerifiedDateString, lastVerifiedVersionString)}
					<a className="header-badge" href={`https://github.com/graphul-rs/graphul-rs.github.io/issues/new?title=Docs update request: ${new URL(window.location.href).pathname}&body=Source: ${window.location.href}%0A%0ARequest: (how can we help?)`}>
						<span className="badge-avatar emoji-avatar">✏️</span>
						<span className="badge-label">Request an update</span>
					</a>
				</div>
			}
		</BrowserOnly>
	);
};
