package com.web.wam.model.service;

import com.web.wam.model.dto.resellboard.*;

import java.util.List;

public interface ResellBoardService {

    List<ResellBoardResponse> getAllArticle();

    void createArticle(ResellBoardPostRequest articleCreateInfo, String photoPath);

    void updateArticle(ResellBoardPutRequest request, String newPhoto);

    public long getLikeCountById(Integer articleId);

    void deleteArticle(Integer articleId);

    ResellBoardResponse getArticleById(Integer articleId);

    List<ResellBoardResponse> getArticlesByMemberId(Integer memberId);

    List<ResellBoardCmtResponse> getCommentsByMemberId(Integer memberId);

    List<ResellBoardCmtResponse> getCommentsById(Integer articleId);

    void createComment(ResellBoardCmtPostRequest request);

    void updateComment(ResellBoardCmtPutRequest request);

    void deleteComment(Integer commentId);

    void addLike(ResellBoardLikePostRequest request);

    void deleteLike(ResellBoardLikePostRequest request);

    List<ResellBoardResponse> getArticleByKeyword(String keyword);
}