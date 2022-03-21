package com.web.wam.model.repository.freeboard;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.querydsl.jpa.impl.JPAQueryFactory;
import com.web.wam.model.dto.freeboard.FreeboardLikePostRequest;
import com.web.wam.model.entity.freeboard.FreeArticleComment;
import com.web.wam.model.entity.freeboard.QFreeArticleComment;
import com.web.wam.model.entity.freeboard.QFreeArticleLike;

@Repository
public class FreeArticleLikeRepositorySupport {
	@Autowired
	private JPAQueryFactory jpaQueryFactory;
	QFreeArticleLike qFreeArticleLike = QFreeArticleLike.freeArticleLike;

	public long countByArticleId(int articleId) {
		long likeCnt = jpaQueryFactory.select(qFreeArticleLike).from(qFreeArticleLike).where(qFreeArticleLike.articleId.eq(articleId)).fetchCount();
		return likeCnt;
	}

	@Transactional
	public void cancelLike(FreeboardLikePostRequest likeCancelInfo) {
		jpaQueryFactory.delete(qFreeArticleLike).where(qFreeArticleLike.articleId.eq(likeCancelInfo.getAtricleId())).where(qFreeArticleLike.memberId.eq(likeCancelInfo.getMemberId())).execute();
	}

}
